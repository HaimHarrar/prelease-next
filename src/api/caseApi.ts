import {getFetcher, postFetcher} from "@/lib/utils.ts";
import {CaseTypeInsert, CaseTypeSelect} from "@/lib/types.ts";
import {caseRoutesApi} from "@/lib/routes.ts";

const getCases = (projectId: string) => getFetcher<CaseTypeSelect[]>(caseRoutesApi.cases(projectId));
const createCase = (data: CaseTypeInsert) => postFetcher<CaseTypeSelect[]>(caseRoutesApi.create(data.projectId.toString()), data);

export {
    getCases,
    createCase,
}