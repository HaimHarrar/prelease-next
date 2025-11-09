import {integer, pgTable, serial, text} from "drizzle-orm/pg-core";
import {kase} from "@/db/drizzle/schemas/kase.ts";
import {relations} from "drizzle-orm";

export const scenario = pgTable("scenarios", {
    id: serial().primaryKey().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    caseId: integer("case_id").notNull().references(() => kase.id, {
        onDelete: "cascade",
    }),
})

export const scenarioRelations = relations(scenario, ({one}) => ({
    kase: one(kase, {
        fields: [scenario.caseId],
        references: [kase.id],
    })
}))