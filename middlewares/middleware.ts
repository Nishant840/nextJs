
import { NextRequest, NextResponse } from "next/server";

let requestCount = 0;
export function middleware(req:NextRequest){

    if(req.nextUrl.pathname.startsWith("/admin")){
        // do some logic 
        return NextResponse.redirect(new URL("/signin",req.url))
    }
    requestCount++;
    const res = NextResponse.next();
    console.log("reqCount: ",requestCount);
    return res; 
}

// export const config = {
//     matcher: "/api/:path*"
// }