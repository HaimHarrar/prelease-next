import {db} from "../drizzle/db";
import {project} from "../drizzle/schemas/project";
import {eq} from "drizzle-orm";
import {ProjectTypeInsert} from "@/lib/types.ts";

export const createProject = (projectInsertion: ProjectTypeInsert) => {
    return db.insert(project).values(projectInsertion).returning()
}

export const getProjects = () => {
    return db.query.project.findMany({with: {cases: true}, columns: {id: true, title: true, description: true}})
}

export const getProjectById = (id: string) => {
    return db.select().from(project).where(eq(project.id, Number(id)))
}
export const getProjectFileById = (id: string, fileName: "codeBase" | "functionalDetails") => {
    return db.select({file: project[fileName]}).from(project).where(eq(project.id, Number(id)))
}