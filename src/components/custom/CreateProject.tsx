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
import {projectFields} from "@/lib/types.ts";

const zipType = z
    .any()
    .refine((files) => files?.length === 1, "File is required")
    .transform((fileList) => fileList[0])
    .refine(
        (file) =>
            file.type === "application/zip" ||
            file.type === "application/x-zip-compressed",
        {message: "File must be a ZIP archive (.zip)"}
    )
    .refine((file) => file.size < 5 * 1024 * 1024, {
        message: "File size must be less than 5MB",
    }).optional()

const formSchema = z.object({
    title: z.string().min(2, {message: "title must be at least 5 characters"}),
    description: z.string().min(2, {message: "description must be at least 5 characters"}),
    codeBase: zipType,
    functionalDetails: zipType,
});

type FormObject = z.infer<typeof formSchema>;

const CreateProject: React.FC<{ isDialog?: boolean }> = ({isDialog = false}) => {
    const router = useRouter();
    const form = useForm<FormObject>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            codeBase: undefined,
            functionalDetails: undefined
        },
    });

    const onSubmit = async (data: FormObject) => {
        try {
            const formData = new FormData();
            formData.append(projectFields.title, data.title);
            formData.append(projectFields.description, data.description);
            if(data.codeBase){
                formData.append(projectFields.codeBase, data.codeBase as File);
            }
            if(data.functionalDetails) {
                formData.append(projectFields.functionalDetails, data.functionalDetails as File);
            }
            const res = await createProject(formData)
            if(res.status === 200){
                router.push("/projects")
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
                <FormField
                    control={form.control}
                    name="codeBase"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>upload Code Base</FormLabel>
                            <FormControl>
                                <Input
                                    className="h-full"
                                    placeholder="Upload Code Base"
                                    type="file"
                                    accept=".zip"
                                    onChange={(e) => {
                                        field.onChange(e.target?.files)
                                    }
                                    }
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="functionalDetails"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Upload Functional Details</FormLabel>
                            <FormControl>
                                <Input
                                    className="h-full"
                                    placeholder="Upload Functional Details"
                                    type="file"
                                    accept=".zip"
                                    onChange={(e) => {
                                        field.onChange(e.target?.files)
                                    }
                                    }
                                />
                            </FormControl>
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