// "use client"
// import { useRouter } from "next/navigation"


// export const Appbar = ()=>{
//     const router = useRouter();
//     return <div>
//         <button onClick={()=>{
//             router.push("/api/auth/signin")
//         }} >
//             Signin
//         </button>
//     </div>
// }

// better way
"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = ()=>{
    const session = useSession();
    return <div>
        <button onClick={()=>{
            signIn();
        }} >
            Signin
        </button>
        <button onClick={()=>{
            signOut()
        }} >
            Logout
        </button>
        {JSON.stringify(session)}
    </div>
}