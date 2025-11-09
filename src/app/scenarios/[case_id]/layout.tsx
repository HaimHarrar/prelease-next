import React from 'react';
import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import { scenarioRoutesWeb} from "@/lib/routes.ts";

const ScenariosLayout: React.FC<{children: React.ReactNode, params: Promise<{ case_id: string }>}> =  async ({children, params}) => {
    const {case_id: caseId} = await params
    return (
        <div className="flex flex-col gap-2 flex-1 w-full bg-amber-300">
            <h1 className="self-start mx-auto font-bold text-2xl p-1">Scenarios</h1>
            {children}
            <Button className="mt-auto mb-3 mx-auto" asChild>
                <Link href={scenarioRoutesWeb.create(caseId)}>Create Scenario</Link>
            </Button>
        </div>
    );
};

export default ScenariosLayout;