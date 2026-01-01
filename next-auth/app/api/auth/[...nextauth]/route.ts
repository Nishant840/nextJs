

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                username:{label:"email",type:"text",placeholder:"email"},
                password:{label:"password",type:"password",placeholder:"password"}
            },
            async authorize(credentials:any){
                const username = credentials.username;
                const password = credentials.password;
                
                // do validation
                // const user = await prisma.findOne({
                //     where:{
                //         email: username,
                //         password: password
                //     }
                // })
                // if(!user){
                //     return null;
                // }
                // return {
                //     id: user.id,
                //     email: user.email
                // }
                return {
                    id: "user1",
                    email: "nk123@gmail.com"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        signIn: ({user})=>{
            if(user.email == "random@gmail.com"){
                return false
            }
            return true
        },
        jwt: ({token, user})=>{
            // do changes in token 
            console.log(token)
            return token;
        },
        session: ({session, token, user}:any)=>{
            session.user.id = token.userId
            return session;
        }
    }
});

export const GET = handler;
export const POST = handler;