const inquirer = require("inquier");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

//array of questions
const questions = [       
        //Title
        {
            type: "input",
            message: "What is your Projects name?",
            name: "title",
            
        },
        //description
        {
            type:"input",
            message: "Enter a description",
            name: "description",
        },
        //installation
        {
            type: "input",
            message: "What are the instructions to install this project. Enter None if their aren't any.",
            name: "installation",
        },
        //Usage
        {
            type: "input",
            message: "How is your project used?",
            name: "usage",
        },
        //test
        {
            type: "input",
            message: "What are the Test instuctions?",
            name:"test",
        }, 
        //contribution
        {
            type: "input",
            message: "Who contributed on this project",
            name: "contribution",

        },
        //credit
        {
            type: "input",
            message: "Who does the Credit go to for this project?",
            name: "credit",
        },
        //checkbox
        {
            type: "checkbox",
            message: "select a licence",
            choices: [
                "MIT",
                "ISC",
                "Apache",
                "None"
            ],
            name: "License",
        },
        //GitHub user
        {
            type: "input",
            message: "Your GitHub user_____",
            name: "GitHub username",
        },
        //Email
        {
            type:"input",
            message: "Your Email address?",
            name: "Email",
        },
];


// function for Readme
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (error) {
            throw error;
        }
        console.log("file created!");
    });
}


// function to init program
function init() {
   inquier.prompt(questions).then((responce) => {
    const markDown = generateMarkdown(response);
    console.log(markdown); 
    writeFile("READMe.md", markdown);
   });

}

// function call to init program
init();