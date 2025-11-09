const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const projectRoutesApi = {
    create: `${baseUrl}/api/projects`,
    projects: `${baseUrl}/api/projects`,
    project: (projectId: string) => `${baseUrl}/api/projects/${projectId}`,
    download: (projectId: string, field: string) => `${baseUrl}/projects/${projectId}/download/${field}`,

} as const

export const projectRoutesWeb = {
    create: `/projects/create`,
    projects: `/projects`,
    project: (projectId: string) => `/projects/${projectId}`,
} as const

export const caseRoutesApi = {
    create: (projectId: string) => `${baseUrl}/api/cases/${projectId}`,
    cases: (projectId: string) => `${baseUrl}/api/cases/${projectId}`,
    case: `${baseUrl}/api/cases`,
} as const

export const caseRoutesWeb = {
    create: (projectId: string) => `/cases/${projectId}/create`,
    cases: (projectId: string) => `/cases/${projectId}`,
    case: (projectId: string, caseId: string) => `/cases/${projectId}/${caseId}`,
} as const

export const scenarioRoutesApi = {
    create: (caseId: string) =>`${baseUrl}/api/scenarios/${caseId}`,
    scenarios: (caseId: string) => `${baseUrl}/api/scenarios/${caseId}`,
    scenario: `${baseUrl}/api/scenarios`,
}

export const scenarioRoutesWeb = {
    create: (caseId: string) => `/scenarios/${caseId}/create`,
    scenarios: (caseId: string) => `/scenarios/${caseId}`,
    scenario: (caseId: string, scenarioId: string) => `/scenarios/${caseId}/${scenarioId}`,
}