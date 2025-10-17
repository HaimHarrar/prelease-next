import { createProject } from "@/db/interfaces/projectInterface";
import { NextRequest, NextResponse } from "next/server";
import {ProjectTypeInsert} from "@/db/drizzle/schemasType";

export async function POST(req: NextRequest) {
    const reqJson: ProjectTypeInsert = await req.json();
    console.log(reqJson)
    createProject(reqJson);

    return new NextResponse(JSON.stringify(reqJson), {status: 200});
}