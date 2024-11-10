import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    secret: process.env.AUTH_SECRET,
    session: {
        maxAge: 30 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/",
        signOut: '/',
        error: '/',
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
});