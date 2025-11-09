import React from 'react';
import {getCases} from "@/api/caseApi.ts";
import Case from "@/app/cases/[project_id]/Case.tsx";

const Page: React.FC<{ params: Promise<{ project_id: string }> }> = async ({params}) => {
    const {project_id: projectId} = await params
    const cases = await getCases(projectId).then(res => res.data)

    return (
        <div className="flex flex-row flex-wrap gap-3 justify-center w-full">
            {
                cases.map((kase, i) => <Case key={i} kase={kase}/>)
            }
        </div>
    );
};

export default Page;