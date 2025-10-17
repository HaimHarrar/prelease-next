import { db } from "../drizzle/db";
import { project } from "../drizzle/schemas/project";
import {eq} from "drizzle-orm";
import {ProjectTypeInsert} from "@/db/drizzle/schemasType";


export const createProject = (projectInsertion: ProjectTypeInsert)=> {
    return db.insert(project).values(projectInsertion).returning();
}

export const getProjects = () => {
    return db.select().from(project)
}

export const getProjectById = (id: string)=> {
    return db.select().from(project).where(eq(project.id, Number(id)))
}
// createProject()

// db.insert(project).values()