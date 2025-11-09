import React from 'react';
import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {projectRoutesWeb} from "@/lib/routes.ts";

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="flex flex-col gap-2 flex-1 w-full bg-amber-100">
            <h1 className="self-start mx-auto font-bold text-2xl p-1">Projects</h1>
            {children}
            <Button className="mt-auto mb-3 mx-auto" asChild>
                <Link href={projectRoutesWeb.create}>Create Project</Link>
            </Button>
        </div>
    );
};

export default Layout;