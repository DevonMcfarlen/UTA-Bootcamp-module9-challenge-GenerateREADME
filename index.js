// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const licenses = ['Apache 2.0',
                  'Boost',
                  'BSD 3-Clause',
                  'BSD 2-Clause',
                  'Eclipse',
                  'IBM Public',
                  'ISC',
                  'MIT',
                  'Mozzilla Public',
                  'Perl',
                  'Unlicense',
                  'WTFPL',
                  'No License'];

const questions = [
    {type: 'input', message: 'Please enter a title for the README.', name: 'title'},
    {type: 'input', message: 'Please write a short description for your project', name: 'desc'},
    {type: 'input', message: 'How do you install your project?', name: 'install'},
    {type: 'input', message: 'How do you use your project?', name: 'usage'},
    {type: 'input', message: 'What are the contribution guidelines for your project?', name: 'contri'},
    {type: 'input', message: 'How should users test your project?', name: 'tests'},
    {type: 'list', message: 'What License would you like to use for your project?', choices: licenses, name: 'license'},
    {type: 'input', message: 'Whats your GitHub username?', name: 'gitHub'},
    {type: 'input', message: 'Whats your email address?', name: 'email'}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README Created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile(response.title, response));
}

// Function call to initialize app
init();
