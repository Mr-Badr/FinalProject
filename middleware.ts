import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { UserRole } from "@prisma/client";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from "@/routes"

export const { auth } = NextAuth(authConfig)

interface RoleGateProps {
  allowedRole: UserRole;
}

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
//console.log("ooooo : ", req.auth?.user);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // First we have to allow every API Route
  if (isApiAuthRoute) {
    return;
  }

  // Check the Auth Routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)) // Go to Dashboard
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl)) // Go to Login page
  }

  return;
})

export const config = {
  // invoce the auth fn above
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};