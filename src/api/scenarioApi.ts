import {getFetcher, postFetcher} from "@/lib/utils.ts";
import {ScenarioTypeInsert, ScenarioTypeSelect} from "@/lib/types.ts";
import {scenarioRoutesApi} from "@/lib/routes.ts";

const getScenarios = (caseId: string) => getFetcher<ScenarioTypeSelect[]>(scenarioRoutesApi.scenarios(caseId))
const createScenario = (data: ScenarioTypeInsert) => postFetcher<ScenarioTypeSelect[]>(scenarioRoutesApi.create(data.caseId.toString()), data)

export {getScenarios, createScenario}