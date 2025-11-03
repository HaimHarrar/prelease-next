"use client"
import {ProjectTypeSelect} from "@/lib/types.ts";
import {getProjectFileById} from "@/api/projectApi.ts";

const Project: React.FC<{ project: ProjectTypeSelect }> = ({project}) => {

    const handleDownload = async () => {
        const res = await getProjectFileById(project.id.toString(), "codeBase")
        const data = res.data
        const blob = new Blob([data], {type: "application/octet-stream"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "file.zip";
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div onClick={handleDownload} className="border-2 p-2">
            <div>{project.title}</div>
            <div>{project.description}</div>
        </div>
    )
}

export default Project