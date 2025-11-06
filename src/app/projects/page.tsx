import React from 'react'
import {getProjects} from "@/api/projectApi.ts";
import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {projectRoutesWeb} from "@/lib/routes.ts";
import Project from "@/app/projects/Project.tsx";

const page = async () => {
    const projects = await getProjects().then(res => res.data)

    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className="sticky top-[var(--navbar-height)] text-xl">Projects</h1>
            <div className="flex flex-row flex-wrap gap-3 justify-center">
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