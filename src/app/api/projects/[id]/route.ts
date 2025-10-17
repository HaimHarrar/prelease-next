import {NextRequest, NextResponse} from "next/server";
import {getProjectById} from "@/db/interfaces/projectInterface";

export const GET = async (req: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const project = await getProjectById(id);
    return NextResponse.json(project, {status: 200});
}