import NextAuth from "next-auth/next";
import nextAuth, { AuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import userLogin from "@/app/libs/userLogin";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export const authOptions : AuthOptions = {
    providers : [
        CredentialsProvider({

            name: "Credentials",
            
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                
                if (!credentials)
                    return null

                const user = await userLogin(credentials.email , credentials.password)
                        
                if (user) 
                    return user
                else 
                    return null
            
        }
      })
    ],
    session : {strategy : 'jwt'},
    callbacks : {
        async jwt({token , user , session , trigger}) {
            
            if (trigger === 'update') {
                console.log('========')
                
                token.data = session.user

                return{
                    ...token , ...user
                }



            }
            return {...token , ...user} 
        } , 
        async session({session , token , user} : {session : any , token : JWT , user : AdapterUser}) {
     
            session.user = token.data

            return session
        }
    },
    // pages : {
    //     signIn : './signin'
    // }
}

const handler  = nextAuth(authOptions)

export {handler as GET , handler as POST}