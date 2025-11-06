import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {projectFields, ProjectTypeSelect} from "@/lib/types.ts";
import {Button} from "@/components/ui/button.tsx";
import ProjectFileBox from "@/app/projects/ProjectFileBox.tsx";

const Project: React.FC<{ project: ProjectTypeSelect }> = ({project}) => {

    return (
        <Card className=" w-[calc(33%-1rem)] h-1/3">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                    {project.description}
                </CardDescription>
                <CardAction>
                    <Button variant="link">go to cases</Button>
                </CardAction>
            </CardHeader>
            <CardContent className="text-center py-4 text-lg font-medium flex flex-row gap-10 justify-center">
                {
                    project.codeBaseFileName &&
                    <ProjectFileBox id={project.id.toString()} fieldName={projectFields.codeBase}
                                    fileName={project.codeBaseFileName!}/>
                }
                {
                    project.functionalDetailsFileName &&
                    <ProjectFileBox id={project.id.toString()} fieldName={projectFields.functionalDetails}
                                    fileName={project.functionalDetailsFileName!}/>
                }
            </CardContent>
            <CardFooter>
                <div>hello</div>
            </CardFooter>
        </Card>
    )
}

export default Project
