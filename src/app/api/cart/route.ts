import {NextRequest,NextResponse} from "next/server"
import {db,cartTable} from "@/lib/drizzle"

import {v4 as uuid} from "uuid"
import { cookies } from "next/headers"
import {eq} from "drizzle-orm"


export const GET=async(request:NextRequest)=>{
    const user=cookies().get("user_id")?.value as string
    console.log(user)
try {
    const res = await db.select().from(cartTable).where(eq(cartTable.user_id,user))
    return NextResponse.json({user})
} catch (error) {
    return NextResponse.json({message:"somethings wrong on cart get"})
}
}

export const POST=async(request:NextRequest)=>{
    const req = await request.json()
    const uid=uuid()
    const user_id=cookies().get("user_id")
    const setCookies=cookies()
    if(!user_id){
        setCookies.set("user_id",uid)
    }

    try {
        const res = await db.insert(cartTable).values({
            product_id:req.product_id,
            quantity:1,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({res})
    } catch (error) {
        
    }
    }