import { auth, signIn } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardLoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await auth();

  if (session) {
    redirect(`/dashboard`);
  }

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6">
      <Link href="/">
        <img src="/images/logo.svg" alt="Logo" className="h-12" />
      </Link>

      <h1 className="text-xl font-semibold">Sign in to your account</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google", {
            redirectTo: `/dashboard`,
          });
        }}
      >
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition-colors duration-300 font-semibold"
        >
          Sign in with Google
        </button>
      </form>
      <p className="paragraph-x-small text-primary-light mt-3 text-center max-w-xs">
        Use the same email address you used for your previous purchases
      </p>
    </div>
  );
}
