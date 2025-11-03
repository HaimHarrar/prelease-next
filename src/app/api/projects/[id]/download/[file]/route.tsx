import {NextRequest, NextResponse} from "next/server";
import {getProjectFileById} from "@/db/interfaces/projectInterface.ts";

export async function GET(req: NextRequest, {params}: { params: Promise<{ id: string, file: string }> }) {
    const {id, file} = await params;
    const res = await getProjectFileById("21", file as "codeBase" | "functionalDetails")
    const newFile = new Uint8Array(res[0].file!)

    return new NextResponse(newFile, {
        status: 200,
        headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": `attachment; filename="${"someName.zip"}"`,
        },
    });
}