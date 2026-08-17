The quickest reliable route for this project is a single Ubuntu 24.04 Hostinger VPS running Node 22, Bun, PM2, and Nginx. Do not deploy it as a static export: it uses API routes, Auth.js, Square, and Next proxy behavior, all of which need a running Next server. Next supports this directly through `next build` + `next start`, and recommends Nginx in front of it. [Next self-hosting guide](https://nextjs.org/docs/app/guides/self-hosting)

Before deploying, fix the current production build blockers. Your latest build compiles and type-checks, but fails while prerendering because of:

- `useSearchParams()` without a Suspense boundary on `shipping-policy`
- GHL Blog API returning HTTP 400 during `/blog` generation

The VPS deployment must stop if `bun run build` fails; don’t work around that.

Recommended flow:

1. In Hostinger, create an Ubuntu 24.04 VPS, point your domain’s `A` records to its IP, then SSH in. Hostinger currently recommends Ubuntu 24.04, PM2, Nginx, and Certbot for Node apps on a VPS. [Hostinger’s VPS Node deployment guide](https://www.hostinger.com/tutorials/deploy-node-js-application)

2. Install Node 22, Git, Nginx, PM2, and Bun. Use Bun because this repository has `bun.lock`; that prevents dependency drift.

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

curl -fsSL https://bun.sh/install | bash
```

Next 16 requires Node 20.9 or newer, so Node 22 is appropriate. [Next installation requirements](https://nextjs.org/docs/app/getting-started/installation)

3. Clone the repository and create the production environment file. Keep it only on the VPS, never in Git.

```bash
sudo mkdir -p /var/www/enyermy
sudo chown -R $USER:$USER /var/www/enyermy
git clone YOUR_REPOSITORY_URL /var/www/enyermy
cd /var/www/enyermy
nano .env.production.local
```

Include the values this project actually uses:

```env
SQUARE_ENVIRONMENT=production
SQUARE_ACCESS_TOKEN=
SQUARE_LOCATION_ID=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
AUTH_SECRET=
AUTH_URL=https://your-domain.com
AUTH_TRUST_HOST=true

GHL_API_BASE_URL=
GHL_API_VERSION=
GHL_API_TOKEN=
GHL_LOCATION_ID=
GHL_BLOG_ID=

REVALIDATE_SECRET=
```

Set `SQUARE_ENVIRONMENT` before the build: it controls both the production-only Square cache and the browser-visible image behavior.

Also configure this Google OAuth redirect URI:

```text
https://your-domain.com/api/auth/callback/google
```

4. Build and start only after the build is green:

```bash
bun install --frozen-lockfile
bun run build
pm2 start npm --name enyermy -- start -- -p 3000 -H 127.0.0.1
pm2 save
pm2 startup
```

Run the command PM2 prints after `pm2 startup`; it enables automatic restart after VPS reboots.

5. Configure Nginx with your real domain in `/etc/nginx/sites-available/enyermy`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Then:

```bash
sudo ln -s /etc/nginx/sites-available/enyermy /etc/nginx/sites-enabled/enyermy
sudo nginx -t
sudo systemctl reload nginx

sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Keep port 3000 private; expose only SSH, HTTP, and HTTPS.

For future releases:

```bash
cd /var/www/enyermy
git pull --ff-only
bun install --frozen-lockfile
bun run build && pm2 reload enyermy --update-env
```

Your Square 10-minute cache will work well on one VPS because Next’s self-hosted cache is stored locally on persistent disk. If you later run multiple VPS instances, use a shared cache such as Redis; otherwise each server maintains its own cache. [Next caching on self-hosted servers](https://nextjs.org/docs/app/guides/self-hosting)

One final production detail: ensure `sharp` is installed on the Linux VPS because Next’s self-hosted image optimization requires it. Your lockfile already includes it, so a clean Bun install should provide the Linux binary.
