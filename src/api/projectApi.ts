import {getFetcher, postFetcher} from "@/lib/utils"
import {ProjectFilesType, ProjectTypeSelect} from "@/lib/types.ts";

const baseUrl = process.env.NEXT_PUBLIC_API_URL
const projectUrl = `${baseUrl}/api/projects`
const url = (restUrl: TemplateStringsArray, ...values: unknown[]) => {
    const res = restUrl.reduce((acc, curr, i) => {
        if(curr) {
            return acc + curr + values[i]
        }
        return acc;
    }, "")

    return projectUrl + res;
}


const getProjects = () => getFetcher<ProjectTypeSelect[]>(projectUrl);
const getProjectById = (id: string) => getFetcher<ProjectTypeSelect[]>(url`/${id}`);

const createProject =  (data: FormData) => postFetcher<ProjectTypeSelect[]>(projectUrl + `/create`, data, {headers: {'Content-Type': 'multipart/form-data'}})
const getProjectFileById = (id: string, field: ProjectFilesType) => getFetcher<ArrayBuffer>(url`/${id}/download/${field}`, {responseType: 'arraybuffer'});

export {
    getProjects,
    createProject,
    getProjectById,
    getProjectFileById
}