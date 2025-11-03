"use client"
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {Textarea} from "@/components/ui/textarea.tsx";

const formSchema = z.object({
    title: z.string().min(5, { message: "title must be at least 5 characters" }),
    description: z.string().min(5, { message: "description must be at least 5 characters" }),
});

type CaseFormType = z.infer<typeof formSchema>;

const CreateCase = () => {
    const form = useForm<CaseFormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    const onSubmit = (data: CaseFormType) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col w-1/5 mx-auto mt-10 border-2 border-gray300 p-4 rounded-md shadow-black shadow-sm">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Enter Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>this is the title of the case</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Enter Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormDescription>this is the description of the case</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-fit mx-auto" size={"sm"} type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default CreateCase;