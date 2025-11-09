"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea.tsx";
import {useRouter} from "next/navigation";
import classNames from "classnames";
import {createScenario} from "@/api/scenarioApi.ts";
import {scenarioRoutesWeb} from "@/lib/routes.ts";

const formSchema = z.object({
    title: z.string().min(2, {message: "title must be at least 5 characters"}),
    description: z.string().min(2, {message: "description must be at least 5 characters"}),
});

type FormObject = z.infer<typeof formSchema>;

const CreateScenario: React.FC<{ isDialog?: boolean, caseId: string }> = ({isDialog = false, caseId}) => {
    const router = useRouter();
    const form = useForm<FormObject>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    const onSubmit = async (data: FormObject) => {
        try {
            const res = await createScenario({...data, caseId: Number(caseId)});
            if(res.status === 200){
                router.push(scenarioRoutesWeb.scenarios(caseId))
                router.refresh()
            }
        } catch (e) {
            console.error(e)
        }

    };
    const formSize = isDialog ? "w-full" : "w-1/5"

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className={classNames("space-y-4 flex flex-col mx-auto mt-10 border-2 border-gray-300 p-4 rounded-md shadow-black shadow-sm", formSize)}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Enter Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>this is the title of the scenario</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Enter Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormDescription>this is the description of the scenario</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button className="w-fit mx-auto" size={"sm"} type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default CreateScenario;