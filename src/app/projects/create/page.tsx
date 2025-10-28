import React from 'react'
import CreateProject from "@/components/custom/CreateProject.tsx";

const createProjectPage = () => {

    const submitFunc = async (formData: FormData) => {
        "use server"
        const title = formData.get("title")
        const description = formData.get("description")
    }
    const inputClass = (<input className="bg-blue-200 w-64"/>).props.className;
    console.log(inputClass)
    return (
        <div className='h-full w-full'>
            <CreateProject />
        </div>
    )
}

export default createProjectPage