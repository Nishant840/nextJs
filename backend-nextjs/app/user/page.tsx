
// do not make backend call if it is a serverside component then directly use db logic using prisma
// if it ia a client component then do backend call
import client from "@/db"

export async function fetchData(){
    // database logic
    const user = await client.user.findFirst()
    return ({
        username: user?.username,
        name: "Nishant kumar"
    })
}

export default async function(){
    const data = await fetchData();
    return <div>
        {data.username}
        <br />
        {data.name}
    </div>
}