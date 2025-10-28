"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea.tsx";
import {createProject} from "@/api/projectApi.ts";
import {useRouter} from "next/navigation";
import classNames from "classnames";

const formSchema = z.object({
    title: z.string().min(5, {message: "title must be at least 5 characters"}),
    description: z.string().min(5, {message: "description must be at least 5 characters"}),
});

type FormData = z.infer<typeof formSchema>;

const CreateProject: React.FC<{ isDialog?: boolean }> = ({isDialog=false}) => {
    const router = useRouter();
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        try {
            const projectRes = await createProject(data)
            console.log(projectRes.data)
            router.push("/projects")
        } catch (e) {
            console.log(e)
        }

    };
    const formSize = isDialog ? "w-full" : "w-1/5"

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className={classNames( "space-y-4 flex flex-col mx-auto mt-10 border-2 border-gray-300 p-4 rounded-md shadow-black shadow-sm", formSize)}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Enter Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>this is the title of the project</FormDescription>
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
                            <FormDescription>this is the description of the project</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button className="w-fit mx-auto" size={"sm"} type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default CreateProject;