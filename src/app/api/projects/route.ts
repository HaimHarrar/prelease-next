import {NextRequest, NextResponse} from "next/server";
import {getProjects} from "@/db/interfaces/projectInterface";

export async function GET(req: NextRequest) {
    const allProjects = await getProjects();
    return NextResponse.json(allProjects, {status: 200});
}