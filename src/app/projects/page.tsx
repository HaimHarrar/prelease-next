import React from 'react'
import {getProjects} from "@/api/projectApi.ts";
import Project from "@/app/projects/Project.tsx";

const page = async () => {
    const projects = await getProjects().then(res => res.data)

    return (
        <div className="flex flex-row flex-wrap gap-3 justify-center w-full">
            {
                projects.map((project) => <Project key={project.id} project={project}/>)
            }
        </div>
    )
}

export default page