import {createProject} from "@/db/interfaces/projectInterface";
import {NextRequest, NextResponse} from "next/server";
import {projectFields, ProjectTypeInsert} from "@/lib/types.ts";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const reqJson: ProjectTypeInsert = {
        title: formData.get(projectFields.title) as string,
        description: formData.get(projectFields.description) as string,
    } as ProjectTypeInsert;

    if(formData.get(projectFields.codeBase)) {
        const codeBaseFile = formData.get(projectFields.codeBase) as File;
        reqJson.codeBase = Buffer.from(await codeBaseFile.arrayBuffer())
        reqJson.codeBaseFileName = codeBaseFile.name as string
    }

    if(formData.get(projectFields.functionalDetails)) {
        const functionalDetailsFile = formData.get(projectFields.functionalDetails) as File;
        reqJson.functionalDetails = Buffer.from(await functionalDetailsFile.arrayBuffer())
        reqJson.functionalDetailsFileName = functionalDetailsFile.name as string
    }

    const res  = await createProject(reqJson);
    return new NextResponse(JSON.stringify(res), {status: 200});
}