const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Give a description of the project:' },
    { type: 'input', name: 'installation', message: 'Give installation instructions:' },
    { type: 'input', name: 'usage', message: 'Give usage information:' },
    { type: 'input', name: 'contributing', message: 'Give contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Give test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license for your project:', choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
    console.log('Successfully wrote to ' + fileName);
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

init();
