import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, decimal } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const product = mysqlTable("product", {
	id: int().notNull(),
	title: varchar({ length: 255 }),
	price: decimal(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "product_id"}),
]);
