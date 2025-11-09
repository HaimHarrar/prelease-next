"use client"
import React from 'react';
import {Dialog ,DialogContent, DialogClose, DialogTitle} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useParams, useRouter} from "next/navigation"
import CreateScenario from "@/components/custom/CreateScenario.tsx";

const Page= () => {
    const params = useParams<{case_id: string}>()
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
                <CreateScenario caseId={params.case_id} isDialog={true}/>
                <DialogClose asChild>
                    <Button>Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default Page;
