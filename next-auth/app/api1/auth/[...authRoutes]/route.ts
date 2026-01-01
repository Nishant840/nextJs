import { NextRequest, NextResponse } from "next/server";


// export async function GET(req:NextRequest, arg:any){
//     const params = await arg.params;
//     console.log(params.authRoutes);
//     return NextResponse.json({
//         masg:"hii there"
//     })
// };

export async function GET(req:NextRequest,{params }:{
    params:Promise<{
        authRoutes: string[]
    }>
}){
    const authRoutes = (await params).authRoutes;
    console.log(authRoutes);
    return NextResponse.json({
        masg:"hii there"
    })
};