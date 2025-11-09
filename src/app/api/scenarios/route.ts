import {getAllScenarios} from "@/db/interfaces/scenarioInterface.ts";
import {NextResponse} from "next/server";

export async function GET() {
    const scenarios = await getAllScenarios();
    return NextResponse.json(scenarios, {status: 200});
}