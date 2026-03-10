import { Pool } from "pg";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { prisma } from "./db";
// If your Prisma file is located elsewhere, you can change the path
// import { PrismaClient } from "@/generated/prisma/client";
// const prisma = new PrismaClient();


export const auth = betterAuth({
    // database: new Pool({
    //     // connection options
    // })
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: { 
        enabled: true, 
    }, 
    socialProviders: { 
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    plugins: [
        expo(),
        tanstackStartCookies(), // make sure this is the last plugin in the array
    ],
    trustedOrigins: [
        // Basic scheme
        "betterexpo://",
        // "betterexpo-prod://",
        // "betterexpo-staging://",
        // Wildcard support for all paths following the scheme
        // "betterexpo://*",
        // Development mode - Expo's exp:// scheme with local IP ranges
        ...(process.env.NODE_ENV === "development"
        ? [
            // "https://admin.faaeda.com://", // Trust all Expo URLs (prefix matching)
            "exp://", // Trust all Expo URLs (prefix matching)
            "exp://**", // Trust all Expo URLs (wildcard matching)
            "exp://192.168.*.*:*/**", // Trust 192.168.x.x IP range with any port and path
            ]
        : ["betterexpo://", "betterexpo://*"]),
    ],
});

{/**
import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  
});


 */}
