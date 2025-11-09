import {getFetcher, postFetcher} from "@/lib/utils"
import {ProjectFilesType, ProjectTypeSelect} from "@/lib/types.ts";
import {projectRoutesApi} from "@/lib/routes.ts";

const getProjects = () => getFetcher<ProjectTypeSelect[]>(projectRoutesApi.projects);
const getProjectById = (id: string) => getFetcher<ProjectTypeSelect[]>(projectRoutesApi.project(id));

const createProject =  (data: FormData) => postFetcher<ProjectTypeSelect[]>(projectRoutesApi.create, data, {headers: {'Content-Type': 'multipart/form-data'}})
const getProjectFileById = (id: string, field: ProjectFilesType) => getFetcher<ArrayBuffer>(projectRoutesApi.download(id, field), {responseType: 'arraybuffer'});

export {
    getProjects,
    createProject,
    getProjectById,
    getProjectFileById
}