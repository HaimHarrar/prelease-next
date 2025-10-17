import {project} from "@/db/drizzle/schemas/project";
import {kase} from "@/db/drizzle/schemas/kase";

export type ProjectTypeInsert = typeof project.$inferInsert
export type ProjectTypeSelect = typeof project.$inferSelect

export type CaseTypeInsert = typeof kase.$inferInsert
export type CaseTypeSelect = typeof kase.$inferSelect