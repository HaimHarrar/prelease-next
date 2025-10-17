import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {project} from "@/db/drizzle/schemas/project";

export const kase = pgTable("cases", {
    id: serial().primaryKey().notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    projectId: integer("project_id").notNull().references(() => project.id, {
        onDelete: "cascade",
    }),
})

export const caseRelations = relations(kase, ({one}) => ({
    project: one(project, {
        fields: [kase.projectId],
        references: [project.id],
    })
}))