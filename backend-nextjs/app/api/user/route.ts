import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server"


export function GET(){
    // database logic
    return Response.json({
        email:"nk@gmail.com",
        name: "Nishant kumar"
    })
}
const client = new PrismaClient();
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