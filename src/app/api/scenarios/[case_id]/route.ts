import {createScenario, getScenarios} from "@/db/interfaces/scenarioInterface.ts";
import {NextRequest, NextResponse} from "next/server";
import {ScenarioTypeInsert} from "@/lib/types.ts";

export async function GET(req: NextRequest, {params}: { params: Promise<{ case_id: string }> } ) {
    const {case_id: caseId} = await params;
    const scenarios = await getScenarios(caseId);
    return NextResponse.json(scenarios, {status: 200});
}

export async function POST(req: NextRequest, {params}: { params: Promise<{ case_id: string }> }) {
    const {case_id: caseId} = await params;
    const {title, description} = await req.json();
    const scenarioData: ScenarioTypeInsert = {
        title,
        description,
        caseId: Number(caseId),
    }
    console.log(scenarioData)
    const res = await createScenario(scenarioData)
    return NextResponse.json(res, {status: 200})
}