import {text, pgTable, serial, customType} from "drizzle-orm/pg-core";
import {bytea} from "../customizedTypes";
import {relations} from "drizzle-orm";
import {kase} from "@/db/drizzle/schemas/kase";

export const project = pgTable("projects", {
    id: serial().primaryKey().notNull(),
    text: text("text").notNull(),
    description: text("description").notNull(),
    functionalDetails: bytea("functional_details"),
    codeBase: bytea("code_base"),
});

export const projectRelations = relations(project, ({many}) => ({
    cases: many(kase),
}))

