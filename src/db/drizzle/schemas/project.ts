import {text, pgTable, serial} from "drizzle-orm/pg-core";
import {bytea} from "../customizedTypes";
import {relations} from "drizzle-orm";
import {kase} from "@/db/drizzle/schemas/kase";

export const project = pgTable("projects", {
    id: serial().primaryKey().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    functionalDetails: bytea("functional_details"),
    codeBase: bytea("code_base"),
});

export const projectRelations = relations(project, ({many}) => ({
    cases: many(kase),
}))

