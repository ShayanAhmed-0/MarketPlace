import { drizzle} from "drizzle-orm/vercel-postgres"
import {pgTable,varchar,integer,serial} from "drizzle-orm/pg-core"
import {InferModel} from "drizzle-orm"
import {sql} from "@vercel/postgres"

export const cartTable = pgTable("usercart", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 255 }).notNull(),
    product_id: varchar("product_id", { length: 255 }).notNull(),
    size: varchar("size", { length: 255 }).notNull(),
    quantity: integer("quantity").notNull(),
  });

  export type theCart = InferModel<typeof cartTable>
export const db = drizzle(sql)
