import React from 'react';
import CreateCase from "@/components/custom/CreateCase.tsx";

const Page: React.FC<{ params: Promise<{ project_id: string }> }> = async ({params}) => {
    const {project_id: projectId} = await params

    return (
        <div>
            <CreateCase projectId={projectId}/>
        </div>
    );
};

export default Page;