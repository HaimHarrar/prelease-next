import {getFetcher, postFetcher} from "@/lib/utils"
import {ProjectTypeInsert, ProjectTypeSelect} from "@/lib/types.ts";

const baseUrl = process.env.NEXT_PUBLIC_API_URL
const projectUrl = `${baseUrl}/api/projects`
const url = (restUrl: TemplateStringsArray) => `${projectUrl}${restUrl}`


const getProjects = () => getFetcher<ProjectTypeSelect[]>(projectUrl);

const createProject =  (data: ProjectTypeInsert) => postFetcher<ProjectTypeSelect[]>(url`/create`, data)

export {
    getProjects,
    createProject
}