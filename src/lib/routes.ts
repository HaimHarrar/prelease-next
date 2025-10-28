import {TemplateString} from "next/dist/lib/metadata/types/metadata-types";

export const projectRoutesApi = {
    create: "/api/projects/create",
    projects: "/api/projects",
    project: (s: TemplateString) => `/api/projects${s}`,
}

export const projectRoutesWeb = {
    create: "/projects/create",
    projects: "/projects",
    project: (s: TemplateString) => `/projects${s}`,
}

export const caseRoutes = {
    create: "/api/cases/create",
    projects: "/api/cases",
    project: "/api/cases",
}