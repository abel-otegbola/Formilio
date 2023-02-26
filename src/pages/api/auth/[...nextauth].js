import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/database/connection";
import Users from "@/model/Schema";
import { compare } from "bcryptjs";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }), 
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        
        await connectMongo().catch(error => res.json({ error: "Connection Failed"}))
        const res = await Users.findOne({ email: credentials.email })
    
        if(!res) {
          throw new Error("Email not registered")
        }
        else {
          //Check password
          const checkPassword = await compare(credentials.password, res.password);
          
          if(!checkPassword || res.email !== credentials.email) {
            throw new Error("Email or Password not correct")
          }

          return { email: res.email, name: res.fullname }
        }
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
}

export default NextAuth(authOptions)