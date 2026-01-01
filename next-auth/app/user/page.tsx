import { NEXT_AUTH } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function(){
    const session = await getServerSession(NEXT_AUTH)
    return <div>
        User component
        {JSON.stringify(session)}
    </div>
}