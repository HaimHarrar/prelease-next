import React from 'react';
import CreateScenario from "@/components/custom/CreateScenario.tsx";

const Page: React.FC<{params: Promise<{case_id: string}>}> = async({params}) => {
    const {case_id: caseId} = await params
    console.log(caseId)
    return (
        <div>
            <CreateScenario caseId={caseId}/>
        </div>
    );
};

export default Page;