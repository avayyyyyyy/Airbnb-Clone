import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/db";

export const option: AuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { type: "email", placeholder: "Enter your email here" },
        password: { type: "password", placeholder: "Enter your password here" },
      },
      async authorize(credentials) {
        const user = await prisma?.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) return null;
        const veriPass = await bcrypt.compare(
          credentials?.password as string,
          user.Password as string
        );
        if (!veriPass) return null;

        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
};

export const handler = NextAuth(option);

export { handler as POST, handler as GET };
