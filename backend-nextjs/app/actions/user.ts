"use server"
import client from "@/db"
import { use } from "react"

export async function signup(username:string, password:string){
    await client.user.create({
        data:{
            username: username,
            password: password
        }
    });
    return true;
}