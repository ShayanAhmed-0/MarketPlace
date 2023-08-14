import { NextRequest,NextResponse } from 'next/server'; 
import {db,cartTable} from "../../../../../lib/drizzle"
import {eq} from "drizzle-orm"

export async function DELETE(request:NextRequest,{params}:{params:{id:number}}) {
    try {
      await db.delete(cartTable).where(eq(cartTable.id,params.id))
      return NextResponse.json({"Deleted":"Item From Cart Deleted"});
    } catch (error) {
      console.log("DELETE Catch")
    }
  }