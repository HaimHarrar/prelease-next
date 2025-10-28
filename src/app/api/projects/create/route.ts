import { createProject } from "@/db/interfaces/projectInterface";
import { NextRequest, NextResponse } from "next/server";
import {ProjectTypeInsert} from "@/lib/types.ts";

export async function POST(req: NextRequest) {
    const reqJson: ProjectTypeInsert = await req.json();
    console.log({reqJson})
    await createProject(reqJson);

    return new NextResponse(JSON.stringify(reqJson), {status: 200});
}