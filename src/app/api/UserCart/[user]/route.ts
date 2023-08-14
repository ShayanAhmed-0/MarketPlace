import { NextRequest,NextResponse } from 'next/server'; 
import {db,cartTable} from "../../../../lib/drizzle"
import {eq} from "drizzle-orm"
import {v4 as uuid} from "uuid"
import { cookies } from "next/headers"


export async function GET(request:NextRequest,{params}:{params:{user:string}}){
    try{
    const res = await db.select().from(cartTable).where(eq(cartTable.user_id,params.user))
    return NextResponse.json({data:res})
}catch(err){
    return NextResponse.json({Error:err})
}
}

export const POST=async(request:NextRequest)=>{
    const req = await request.json()
    const uid=uuid()
    const setCookies=cookies()
const user_id=cookies().get("user_id")
    if(!user_id){
        setCookies.set("user_id",uid)
    }

    try {
        const res = await db.insert(cartTable).values({
            product_id:req.product_id,
            size:req.size,
            quantity:req.quantity,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({res})
    } catch (error) {

    }
    }

  