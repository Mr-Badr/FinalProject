import { ExtendedUser } from './next-auth.d';
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import { getUserById } from "@/data/user"
import { UserRole } from '@prisma/client';

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    /* 
      async signIn({ user }) {    // Here i can Allow/Block users from SignIn
        const existingUser = await getUserById(user.id);
        if (!existingUser || !existingUser.emailVerified) {
          return false;
        }
        return true;
      } 
    */
    async session({ token, session }) {
      //console.log({ sessionToken: token, session });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session
    },
    async jwt({ token }) {
      // We will pass the Role from the token because we can se it in 'req' in middleware
      if (!token.sub) return token; // That's mean that i am Logged out because i have the id

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})