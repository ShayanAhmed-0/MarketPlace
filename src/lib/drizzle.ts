import { drizzle} from "drizzle-orm/vercel-postgres"
import {pgTable,varchar,integer,serial} from "drizzle-orm/pg-core"
import {sql} from "@vercel/postgres"

export const cartTable=pgTable("usercart",{
    user_id:varchar("user_id",{
        length:255
    }).notNull(),
    product_id:varchar("product_id",{
        length:255
    }).notNull(),
    size:varchar("size",{
        length:255
    }).notNull(),
    quantity: integer("quantity").notNull()
})

export const db = drizzle(sql)
