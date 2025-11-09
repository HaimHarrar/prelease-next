import React from 'react';
import {getScenarios} from "@/api/scenarioApi.ts";
import Scenario from "@/app/scenarios/[case_id]/Scenario.tsx";

const Page: React.FC<{ params: Promise<{ case_id: string }> }> = async ({params}) => {
    const {case_id: caseId} = await params
    const cases = await getScenarios(caseId).then(res => res.data)

    return (
        <div className="flex flex-row flex-wrap gap-3 justify-center w-full">
            {
                cases.map((scenario, i) => <Scenario key={i} scenario={scenario}/>)
            }
        </div>
    );
};

export default Page;