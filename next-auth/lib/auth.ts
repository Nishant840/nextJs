import CredentialsProvider from "next-auth/providers/credentials"


export const NEXT_AUTH = {
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
                    id: "1",
                    name: "nishant",
                    email: "nk123@gmail.com"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        signIn: ({user}:any)=>{
            if(user.email == "random@gmail.com"){
                return false
            }
            return true
        },
        jwt: ({token, user}:any)=>{
            // do changes in token 
            console.log(token)
            return token;
        },
        session: ({session, token, user}:any)=>{
            session.user.id = token.sub
            return session;
        }
    }
}