"use server"
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 
// Configuration options for authentication
export const handler = NextAuth({
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        email: user.email,
        image: user.image,
      },
    }),
  },
  // Prisma adapter to connect NextAuth.js with the database
  adapter: PrismaAdapter(prisma),
  // Authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  }
});

export { handler as GET, handler as POST };
 
// Utility function to retrieve the server session with authentication options
export const getServerAuthSession = () => getServerSession(handler);