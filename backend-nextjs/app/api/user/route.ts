import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server"


const client = new PrismaClient();
export async function GET(req:NextRequest){
    // database logic
    const user = await client.user.findFirst()
    return Response.json({
        email: user?.username,
        name: "Nishant kumar"
    })
}
export async function POST(req:NextRequest){
    // extract the body
    const body = await req.json();
    
    // store the body in databse
    await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
    return Response.json({
        message: "You are logged in!"
    })
}