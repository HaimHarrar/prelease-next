import {ScenarioTypeInsert} from "@/lib/types.ts";
import {db} from "@/db/drizzle/db.ts";
import {scenario} from "@/db/drizzle/schemas/scenario.ts";
import {eq} from "drizzle-orm";

const createScenario = (scenariosInsertion: ScenarioTypeInsert) => {
    return db.insert(scenario).values(scenariosInsertion).returning()
}

const getAllScenarios = () => {
    return db.select().from(scenario)
}

const getScenarios = (caseId: string) => {
    return db.select().from(scenario).where(eq(scenario.caseId, Number(caseId)))
}

const getScenarioById = (id: string) => {
    return db.select().from(scenario).where(eq(scenario.id, Number(id)))
}

export {
    createScenario,
    getAllScenarios,
    getScenarios,
    getScenarioById,
}