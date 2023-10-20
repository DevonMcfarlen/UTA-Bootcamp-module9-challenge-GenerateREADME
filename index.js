// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gM = require('generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', message: 'Please enter a title for the README.', name: 'title'},
    {type: 'input', message: 'Please write a short description for your project', name: 'desc'},
    {type: 'input', message: 'How do you install your project?', name: 'install'},
    {type: 'input', message: 'How do you use your project?', name: 'usage'},
    {type: 'input', message: 'What are the contribution guidelines for your project?', name: 'contri'},
    {type: 'input', message: 'How should users test your project?', name: test},
    {type: 'list', message: 'What License would you like to use for your project?', name: 'license'},
    {type: 'input', message: 'Whats your GitHub username?', name: 'gitHub'},
    {type: 'input', message: 'Whats your email address?', name: 'email'}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.html`, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile(response.title, gM.generateMarkdown(response)));
}

// Function call to initialize app
init();
