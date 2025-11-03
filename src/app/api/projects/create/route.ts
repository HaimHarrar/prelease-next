import {createProject} from "@/db/interfaces/projectInterface";
import {NextRequest, NextResponse} from "next/server";
import {ProjectTypeInsert} from "@/lib/types.ts";

export async function POST(req: NextRequest) {
    const r = await req.formData();
    const codeBaseBuffer = r.get("codeBase") ? Buffer.from(await (r.get("codeBase") as File)?.arrayBuffer()) : null
    const functionalDetailsBuffer = r.get("functionalDetails") ? Buffer.from(await (r.get("functionalDetails") as File)?.arrayBuffer()) : null
    const reqJson: ProjectTypeInsert = {
        title: r.get("title") as string,
        description: r.get("description") as string,
        codeBase: codeBaseBuffer,
        functionalDetails: functionalDetailsBuffer
    } as ProjectTypeInsert;

    await createProject(reqJson);
    return new NextResponse(JSON.stringify(reqJson), {status: 200});
}