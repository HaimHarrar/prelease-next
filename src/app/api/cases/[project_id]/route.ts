import {NextRequest, NextResponse} from "next/server";
import {createCase, getCases} from "@/db/interfaces/caseInterface.ts";
import {CaseTypeInsert} from "@/lib/types.ts";

export async function GET(req: NextRequest, {params}: { params: Promise<{ project_id: string }> }) {
    const {project_id: projectId} = await params;
    const cases = await getCases(projectId);
    return NextResponse.json(cases, {status: 200});
}

export async function POST(req: NextRequest, {params}: { params: Promise<{ project_id: string }> }) {
    const {project_id: projectId} = await params;
    const {title, description} = await req.json();
    const caseData: CaseTypeInsert = {
        title,
        description,
        projectId: Number(projectId),
    }
    const res = await createCase(caseData)
    return NextResponse.json(res, {status: 200});
}