import {project} from "@/db/drizzle/schemas/project";
import {kase} from "@/db/drizzle/schemas/kase";
import {scenario} from "@/db/drizzle/schemas/scenario.ts";

export const projectFields = {
    id: "id",
    title: "title",
    description: "description",
    functionalDetails: "functionalDetails",
    functionalDetailsFileName: "functionalDetailsFileName",
    codeBase: "codeBase",
    codeBaseFileName: "codeBaseFileName",
} as const;


export const caseFields = {
    id: "id",
    title: "title",
    description: "description",
    projectId: "projectId",
} as const


export type ProjectTypeInsert = typeof project.$inferInsert
export type ProjectTypeSelect = typeof project.$inferSelect

export type CaseTypeInsert = typeof kase.$inferInsert
export type CaseTypeSelect = typeof kase.$inferSelect

export type ScenarioTypeInsert = typeof scenario.$inferInsert
export type ScenarioTypeSelect = typeof scenario.$inferSelect

export type ProjectFilesType = typeof projectFields.codeBase | typeof projectFields.functionalDetails
export type ProjectFilesNameType =
    typeof projectFields.codeBaseFileName
    | typeof projectFields.functionalDetailsFileName