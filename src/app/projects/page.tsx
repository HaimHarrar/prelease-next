import React from 'react'
import {getProjects} from "@/api/projectApi.ts";
import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {projectRoutesWeb} from "@/lib/routes.ts";
import {ProjectTypeSelect} from "@/lib/types.ts";

const page = async () => {
    const projects = await getProjects().then(res => res.data)

    return (
        <div>
            <h1>Projects</h1>
            <div className='flex flex-row gap-2'>
                {
                    projects.map((project) => <Project key={project.id} project={project}/>)
                }
            </div>
            <Button asChild>
                <Link href={projectRoutesWeb.create}>Projects create</Link>
            </Button>
        </div>
    )
}

export default page

const Project:React.FC<{project: ProjectTypeSelect}> = ({project}) => {
    return (
        <div className="border-2 p-2">
            <div>{project.title}</div>
            <div>{project.description}</div>
        </div>
    )
}