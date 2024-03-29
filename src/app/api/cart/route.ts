import { QueryResult } from '@vercel/postgres';
import { NextRequest,NextResponse } from 'next/server'; 
import {db,cartTable} from "../../../lib/drizzle"
import { sql } from '@vercel/postgres';
import {v4 as uuid} from "uuid"
import { cookies } from "next/headers"

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
            quantity:req.quantity,
            size:req.size,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({res})
    } catch (error) {

    }
    }