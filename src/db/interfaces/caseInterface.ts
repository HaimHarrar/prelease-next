import {CaseTypeInsert} from "@/lib/types.ts";
import {kase} from "@/db/drizzle/schemas/kase.ts";
import {db} from "@/db/drizzle/db.ts";
import {eq} from "drizzle-orm";

const createCase = (caseInsertion: CaseTypeInsert) => {
    return db.insert(kase).values(caseInsertion).returning()
}

const getAllCases = () => {
    return db.select().from(kase)
}

const getCases = (projectId: string) => {
    return db.query.kase.findMany({
        where: (table, func) => func.sql`project_id = ${projectId}`
    })
}

const getCaseById = (id: string) => {
    return db.select().from(kase).where(eq(kase.id, Number(id)))
}

export {
    getAllCases,
    getCases,
    createCase,
    getCaseById,
}