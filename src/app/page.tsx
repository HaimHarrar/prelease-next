import React from 'react'
import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {projectRoutesWeb} from "@/lib/routes.ts";

const page = () => {
  return (
    <div className={'flex flex-col gap-2 items-center mt-5'}>
        <Button asChild>
            <Link href={projectRoutesWeb.projects}>Projects</Link>
        </Button>
    </div>
  )
}

export default page