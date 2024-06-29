/** 
 * An Array of routes that are accessible to the public
 * Tese routes do not require authentication
 * @type {string[]}
 * */

export const publicRoutes = [
  "/",
  "/home",
  "/about",
  "/contact",
]

/** 
 * An Array of routes that are used for authentification
 * These routes will redirect logged in users to /settings ( /dashboard later )
 * @type {string[]}
 * */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
]

/** 
 * The prefix for API Authentification routes
 * Routes that start with this prefix are used for API authentification purposes
 * @type {string}
 * */

export const apiAuthPrefix = "/api/auth"

/** 
 * The default redirect path after loggin in
 * @type {string}
 * */
export const DEFAULT_LOGIN_REDIRECT = "/admin"
