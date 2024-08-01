import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

const GITHUB_ID = process.env.GITHUB_ID as string;
const GITHUB_SECRET = process.env.GITHUB_SECRET as string;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET as string;

export const authOptions: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
