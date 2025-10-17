import { getFetcher } from "@/lib/utils"
import {ProjectTypeSelect} from "@/db/drizzle/schemasType";

const baseUrl = process.env.NEXT_PUBLIC_API_URL
const projectUrl = `${baseUrl}/api/project`

export const getProjects = async () => {
    return await getFetcher<ProjectTypeSelect[]>(`${projectUrl}/getProjects`);
}