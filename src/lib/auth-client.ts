import { twoFactorClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"


// export const authClient = createAuthClient({
export const { useSession, signIn, signOut, signUp, twoFactor } = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.BETTER_AUTH_URL as string,
    plugins: [twoFactorClient()],
})

