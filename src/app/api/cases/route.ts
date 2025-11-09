import {NextResponse} from "next/server";
import {getAllCases} from "@/db/interfaces/caseInterface.ts";

export async function GET() {
    const cases = await getAllCases();
    return NextResponse.json(cases, {status: 200});
}