import React from 'react';
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import Link from "next/link";
import {scenarioRoutesWeb} from "@/lib/routes.ts";
import {CaseTypeSelect} from "@/lib/types.ts";

const Case: React.FC<{ kase: CaseTypeSelect }> = ({kase}) => {
    return (
        <Card className="w-[calc(20%-1rem)] ">
            <CardHeader>
                <CardTitle>{kase.title}</CardTitle>
                <CardDescription>
                    {kase.description}
                </CardDescription>
                <CardAction>
                    <Button variant="link" asChild>
                        <Link href={scenarioRoutesWeb.scenarios(kase.id.toString())}
                              className="text-primary underline-offset-4 hover:underline">go to scenarios</Link>
                    </Button>
                </CardAction>
            </CardHeader>
        </Card>
    );
};

export default Case;