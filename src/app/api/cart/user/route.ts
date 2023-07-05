import {NextRequest,NextResponse} from "next/server"
import {db,cartTable} from "@/lib/drizzle"

import {v4 as uuid} from "uuid"
import { cookies } from "next/headers"
import {eq} from "drizzle-orm"


export const GET=async(request:NextRequest)=>{
try {
    const user=cookies().get("user_id")?.value as string
    const res = await db.select().from(cartTable).where(eq(cartTable.user_id,user))
    return NextResponse.json({res})
} catch (error) {
    return NextResponse.json({message:"somethings wrong on cart get"})
}
}