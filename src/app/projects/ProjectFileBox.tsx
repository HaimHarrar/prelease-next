"use client"
import React from 'react';
import downloadFolderIcon from '@/assets/icons/download-folder.svg'
import Image from "next/image";
import {getProjectFileById} from "@/api/projectApi.ts";
import {ProjectFilesType} from "@/lib/types.ts";

const ProjectFileBox: React.FC<{id: string, fieldName: ProjectFilesType, fileName: string}> = ({id, fieldName, fileName}) => {
    const iconSize = 20
    const handleDownload = async () => {
        const res = await getProjectFileById(id, fieldName)
        const data = res.data
        const blob = new Blob([data], {type: "application/octet-stream"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className='border-2 border-black p-2 w-1/2 flex-1 flex flex-row gap-2 items-center justify-around'>
            <p>{fileName}</p>
            <div onClick={handleDownload} className='p-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer'>
                <Image src={downloadFolderIcon} alt="empty" height={iconSize} width={iconSize} />
            </div>
        </div>
    );
};

export default ProjectFileBox;

