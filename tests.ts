
const axios = require("axios");
// import { ProjectType } from "./src/db/drizzle/schemas/project.ts";

const url = "http://localhost:3000"
const createProjectTest = async() => {
    const createProjectRoute = "/api/project/create";
    // const project: ProjectType = {
    const project= {
        text: "test2",
        description: "test2",

        // functionalDetails: Buffer.from("test"),
        // codeBase: Buffer.from("test"),
    };

    // const response = await axios.post(`${url}${createProjectRoute}`, project);
    const res = await fetch(`${url}${createProjectRoute}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });
    const data = await res.json().catch((err) => {
        console.log(err);
    })

    console.log(data);
};

createProjectTest();