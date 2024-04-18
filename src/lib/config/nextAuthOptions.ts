import { geUserPlayerByUsername } from "@/api/queries/geUserPlayerByUsername";
import { authenticate } from "@/app/api/auth/_action";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      user && (token.accessToken = user.accessToken);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as typeof session.user;
      session.accessToken = token.accessToken as string;

      return session;
    },
    async signIn({ user }) {
      const userExistsInDatabase = await geUserPlayerByUsername({
        username: user.username,
      });

      const isAllowedToSignIn = true;
      return isAllowedToSignIn;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const authenticateResponse = await authenticate(username, password);

        return authenticateResponse;
      },
    }),
  ],
};
