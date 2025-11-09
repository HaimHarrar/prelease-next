"use client"
import React from 'react';
import {Dialog ,DialogContent, DialogClose, DialogTitle} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useParams, useRouter} from "next/navigation"
import CreateCase from "@/components/custom/CreateCase.tsx";

const Page= () => {
    const params = useParams<{project_id: string}>()
    const router = useRouter()

    const onOpenChange = () => {
        router.back();
    }

    return (
        <Dialog open={true} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogTitle>
                    Create Project
                </DialogTitle>
                <CreateCase projectId={params.project_id} isDialog={true}/>
                <DialogClose asChild>
                    <Button>Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default Page;
