const { writeFile } = require("./utils/generateReadme")
const inquirer = require('inquirer');
const { generateText } = require("./src/readme-template");

//User responses that will be used in the ReadMe 
const questions = [
    {
        type: 'input',
        name: 'Project',
        message: 'What is the title of your project?',
        validate: ProjectInput => {
            if (ProjectInput) {
                return true;
            } else {
                console.log('Please Enter Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description of project:',
        validate: DescriptionInput => {
            if (DescriptionInput) {
                return true;
            } else {
                console.log('Please Enter Description!');
                return false;
            }
        },
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to enter installation instructions?',
        default: false
    },
    {
        type: 'input',
        name: 'Installing',
        message: 'Enter instructions for installing your project:',
        when: ({ confirmInstall }) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmGuidelines',
        message: 'Would you like to enter contribution guidelines?',
        default: false
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Enter guidelines for contribution toward your project:',
        when: ({ confirmGuidelines }) => {
            if (confirmGuidelines) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license?',
        default: false
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What type of licence do you choose for this application?',
        choices: ['BSD', 'MIT', 'GPL'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Enter your github!");
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Enter your email!");
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to enter test instructions?',
        default: false
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter Test Instructions:',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
]

//Prompts user with questions to respond to, storing user responses.
//After storing user responses write a new file inputing the user responses.
inquirer.prompt(questions)
    .then((response) => {
        const { Project, Description, Installing, contributionGuidelines, license, github, email, Tests } = response
        const generatedText = generateText(Project, Description, Installing, contributionGuidelines, license, github, email, Tests)

        writeFile(generatedText)
            .catch(err => { console.log(err) })
            .then(response => { })
    })



