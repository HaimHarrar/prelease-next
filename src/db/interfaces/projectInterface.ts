import {db} from "../drizzle/db";
import {project} from "../drizzle/schemas/project";
import {eq} from "drizzle-orm";
import {ProjectFilesNameType, ProjectFilesType, ProjectTypeInsert} from "@/lib/types.ts";

export const createProject = (projectInsertion: ProjectTypeInsert) => {
    return db.insert(project).values(projectInsertion).returning()
}

export const getProjects = () => {
    return db.query.project.findMany({with: {cases: true}, columns: {id: true, title: true, description: true, codeBaseFileName: true, functionalDetailsFileName: true}})
}

export const getProjectById = (id: string) => {
    return db.select().from(project).where(eq(project.id, Number(id)))
}
export const getProjectFileById = (id: string, file: ProjectFilesType) => {
    const fileName = file.concat("FileName") as ProjectFilesNameType;
    return db.select({file: project[file], fileName: project[fileName]}).from(project).where(eq(project.id, Number(id)))
}