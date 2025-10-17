import React from 'react'

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
            <form action={submitFunc} className="bg-amber-50 flex flex-col gap-2 p-2  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <input className={inputClass} type="text" name="title" placeholder='Title'/>
                <input className={inputClass} name="description" placeholder='Description'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default createProjectPage