import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getOrCreateSquareCustomer } from "./lib/customer";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email && !token.squareCustomerId) {
        try {
          token.squareCustomerId = await getOrCreateSquareCustomer({
            email: user.email,
            givenName: user.name?.split(" ")[0],
            familyName: user.name?.split(" ").slice(1).join(" "),
          });
        } catch (error) {
          console.error(
            "[auth] Error creando/buscando cliente en Square:",
            error,
          );
          // No rompemos el login aunque falle Square — el usuario igual entra.
          // squareCustomerId quedará undefined y se reintentará en el próximo login.
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.squareCustomerId = token.squareCustomerId as
        | string
        | undefined;
      return session;
    },
  },
});
