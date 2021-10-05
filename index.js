const fs = require('fs');
const inquirer = require('inquirer');
// const jest = require('jest');

const employee = require('./lib/employee.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: ' This application will generate a new team profile page for your team. A team manager is required for each team, please enter your first and last name. (required)',
            name: 'managerName',
            validate: (input) => {
                if (input === '') {
                    return console.log('Please enter your full name.')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "What is your manager's employee ID? (required)",
            name: 'managerId',
            validate: (input) => {
                if (input === '') {
                    return console.log("Please enter your manager's employee ID.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "What is your manager's email address? (required)",
            name: 'managerEmail',
            validate: (input) => {
                if (input === '') {
                    return console.log("Please enter your manager's email address.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "What is your manager's office number? (required)",
            name: 'managerOffice',
            validate: (input) => {
                if (input === '') {
                    return console.log("Please enter your manager's office number.")
                } else {
                    return true;
                }
            }
        }
        // {
        //     type: 'input',
        //     message: 'Describe how a user should utilize or interact with your project. (optional)',
        //     name: 'usage',
        // },
        // {
        //     type: 'input',
        //     message: 'How was/can your project be tested? (optional)',
        //     name: 'testing',
        // },
        // {
        //     type: 'input',
        //     message: 'How can users or other developers contribute to this project? (optional)',
        //     name: 'contributing',
        // },
        // {
        //     type: 'list',
        //     message: 'Under which license will your project be covered?',
        //     name: 'license',
        //     choices: ['MIT', 'ISC', 'Apache 2.0', 'BSD 3-Clause'],
        // },
        // {
        //     type: 'input',
        //     message: 'Please enter your GitHub username. (required)',
        //     name: 'author',
        //     validate: (input) => {
        //         if (input === '') {
        //             return console.log("Please provide your GitHub username as author of this README.")
        //         } else {
        //             return true;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     message: 'Please provide an email address where you can be reached for additional questions about your new project. (required)',
        //     name: 'email',
        //     validate: (input) => {
        //         if (input === '') {
        //             return console.log("An email address for contact purposes is required to finish this README.")
        //         } else {
        //             return true;
        //         }
        //     }
        // }
    ])
    .then((data) => {
        // const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

        fs.writeFile('index.html', teamContent(data), (err) => 
            err ? console.error(err) : console.log('Success! A README for your new project has been created.'))
    });


teamContent = (data) => {
// let tableofCont = `
// ## Table of Contents`;

// if (data.installation !== ``) { tableofCont += `
// - [Installation](#installation)`;
// }
// if (data.usage !== ``) { tableofCont += `
// - [Usage](#usage)`;
// }
// if (data.testing !== ``) { tableofCont += `
// - [Testing](#testing)`;
// }
// if (data.contributing !== ``) { tableofCont += `
// - [Contributions](#contributions)`;
// }
// tableofCont += `
// - [License](#license)
// - [Contact](#contact)`;


// let badge = ``;

// if (data.license === 'MIT') { badge += `
// ![MIT License](/badges/license-MIT-red.svg)`
// };
// if (data.license === 'ISC') { badge += `
// ![ISC License](/badges/license-ISC-blue.svg)`
// };
// if (data.license === 'Apache 2.0') { badge += `
// ![Apache 2.0 License](/badges/license-Apache-orange.svg)`
// };
// if (data.license === 'BSD 3-Clause') { badge += `
// ![BSD 3-Clause License](/badges/license-BSD-green.svg)`
// };


// let content = `
// # ${data.title}`;

// content += `
// ## Description
// ${data.description}
// ${badge}`;

// content += tableofCont;

// if (data.installation !== ``) { content += `
// ## Installation
// ${data.installation}`;
// }
// if (data.usage !== ``) { content += `
// ## Usage
// ${data.usage}`;
// }
// if (data.testing !== ``) { content += `
// ## Testing
// ${data.testing}`;
// }
// if (data.contributing !== ``) { content += `
// ## Contributions
// ${data.contributing}`;
// }

// content += `
// ## License
// \u00A9 ${copyrightYear} ${data.fullname}\n
// This project is protected under the ${data.license} license. For more information, please visit [https://opensource.org/licenses](https://opensource.org/licenses).

// ## Contact
// This project was created by ${data.fullname} and can be found at [https://github.com/${data.author}](https://github.com/${data.author}).\n
// For further information, feel free to email the author at ${data.email} with any questions about the project or regarding future updates or other issues.`;

// return content;
};