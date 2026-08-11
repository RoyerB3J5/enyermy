import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      squareCustomerId?: string;
    };
  }

  interface User {
    squareCustomerId?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    squareCustomerId?: string;
  }
}
