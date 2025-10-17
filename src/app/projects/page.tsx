import React from 'react'
import {getProjects} from "@/db/interfaces/projectInterface";

const page = async () => {
    // const projects = await getProjects();
    const projects: {id: string, text: string}[] = []

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default page