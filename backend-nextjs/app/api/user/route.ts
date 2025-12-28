import { NextRequest } from "next/server"


export function GET(){
    // database logic
    return Response.json({
        email:"nk@gmail.com",
        name: "Nishant kumar"
    })
}

export async function POST(req:NextRequest){
    // extract the body
    const body = await req.json();
    console.log(body);
    // store the body in databse

    return Response.json({
        message: "You are logged in!"
    })
}