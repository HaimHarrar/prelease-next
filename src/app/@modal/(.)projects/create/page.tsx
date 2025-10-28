"use client"
import React from 'react';
import CreateProject from "@/components/custom/CreateProject.tsx";
import {Dialog ,DialogContent, DialogClose, DialogTitle} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import { useRouter } from "next/navigation"

const Page = () => {
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
                <CreateProject isDialog={true}/>
                <DialogClose asChild>
                    <Button>Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default Page;
