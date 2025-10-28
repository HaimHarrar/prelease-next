import {CaseTypeInsert} from "@/lib/types.ts";
import {kase} from "@/db/drizzle/schemas/kase.ts";
import {db} from "@/db/drizzle/db.ts";
import {eq} from "drizzle-orm";

export const createCase = (caseInsertion: CaseTypeInsert) => {
    return db.insert(kase).values(caseInsertion).returning()
}

export const getCases = () => {
    return db.query.kase.findMany({
        with: {project: true},
        where: (table, func) => func.sql`project.id = 1`
    })
}

export const getCaseById = (id: string) => {
    return db.select().from(kase).where(eq(kase.id, Number(id)))
}