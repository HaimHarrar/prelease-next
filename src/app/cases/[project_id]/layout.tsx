import React from 'react';
import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {caseRoutesWeb} from "@/lib/routes.ts";

const CasesLayout: React.FC<{children: React.ReactNode, params: Promise<{ project_id: string }>}> =  async ({children, params}) => {
    const {project_id: projectId} = await params
    return (
        <div className="flex flex-col gap-2 flex-1 w-full bg-amber-200">
            <h1 className="self-start mx-auto font-bold text-2xl p-1">Cases</h1>
            {children}
            <Button className="mt-auto mb-3 mx-auto" asChild>
                <Link href={caseRoutesWeb.create(projectId)}>Create Case</Link>
            </Button>
        </div>
    );
};

export default CasesLayout;