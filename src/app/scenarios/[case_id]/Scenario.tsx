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
import {caseRoutesWeb} from "@/lib/routes.ts";
import {ScenarioTypeSelect} from "@/lib/types.ts";

const Scenario: React.FC<{ scenario: ScenarioTypeSelect }> = ({scenario}) => {
    return (
        <Card className="w-[calc(20%-1rem)] ">
            <CardHeader>
                <CardTitle>{scenario.title}</CardTitle>
                <CardDescription>
                    {scenario.description}
                </CardDescription>
                <CardAction>
                    <Button variant="link" asChild>
                        <Link href={caseRoutesWeb.cases(scenario.id.toString())}
                              className="text-primary underline-offset-4 hover:underline">go to scenarios</Link>
                    </Button>
                </CardAction>
            </CardHeader>
        </Card>
    );
};

export default Scenario;