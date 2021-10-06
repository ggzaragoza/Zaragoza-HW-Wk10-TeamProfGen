const fs = require('fs');
const inquirer = require('inquirer');

// const employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');


const teamMembers = [];


addManager = () => {
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
        ])
        .then((data) => {
            const teamManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
            teamMembers.push(teamManager);

            buildTeam();
            // console.log(teamManager);
            // return teamManager;
            // const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

            // fs.writeFile('index.html', teamContent(data), (err) => 
            //     err ? console.error(err) : console.log('Success! A README for your new project has been created.'))
        });
};


addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter the Engineer's full name. (required)",
                name: 'engineerName',
                validate: (input) => {
                    if (input === '') {
                        return console.log('Please enter a name for the Engineer.')
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the Engineer's employee ID? (required)",
                name: 'engineerId',
                validate: (input) => {
                    if (input === '') {
                        return console.log("Please enter the Engineer's employee ID.")
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the Engineer's email address? (required)",
                name: 'engineerEmail',
                validate: (input) => {
                    if (input === '') {
                        return console.log("Please enter the Engineer's email address.")
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the Engineer's Github username? (required)",
                name: 'engineerGitHub',
                validate: (input) => {
                    if (input === '') {
                        return console.log("Please enter the Engineer's GitHub username.")
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then((data) => {
            const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
            teamMembers.push(newEngineer);

            buildTeam();
        });
};


addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter the Intern's full name. (required)",
                name: 'internName',
                validate: (input) => {
                    if (input === '') {
                        return console.log('Please enter a name for the Intern.')
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the Intern's employee ID? (required)",
                name: 'internId',
                validate: (input) => {
                    if (input === '') {
                        return console.log("Please enter the Intern's employee ID.")
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the Intern's email address? (required)",
                name: 'internEmail',
                validate: (input) => {
                    if (input === '') {
                        return console.log("Please enter the Intern's email address.")
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "At which institution is the Intern currently enrolled? (required)",
                name: 'internSchool',
                validate: (input) => {
                    if (input === '') {
                        return console.log("This field is required. If not attending school, enter 'n/a.'")
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then((data) => {
            const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            teamMembers.push(newIntern);

            buildTeam();
            // console.log(teamManager);
            // return newEngineer;
            // const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

            // fs.writeFile('index.html', teamContent(data), (err) => 
            //     err ? console.error(err) : console.log('Success! A README for your new project has been created.'))
        });
};


function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add a new team member?',
                name: 'profileOptions',
                choices: ['Add Engineer', 'Add Intern', 'Generate Team Profile']
            }
        ])
        .then((data) => {
            if (data.profileOptions === 'Add Engineer') {
                addEngineer();
            } else if (data.profileOptions === 'Add Intern') {
                addIntern();
            } else {
                generateTeamProfile();
            }
        });
}

function generateTeamProfile() {
    console.log(teamMembers);
}


addManager();

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: ' This application will generate a new team profile page for your team. A team manager is required for each team, please enter your first and last name. (required)',
//             name: 'managerName',
//             validate: (input) => {
//                 if (input === '') {
//                     return console.log('Please enter your full name.')
//                 } else {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             message: "What is your manager's employee ID? (required)",
//             name: 'managerId',
//             validate: (input) => {
//                 if (input === '') {
//                     return console.log("Please enter your manager's employee ID.")
//                 } else {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             message: "What is your manager's email address? (required)",
//             name: 'managerEmail',
//             validate: (input) => {
//                 if (input === '') {
//                     return console.log("Please enter your manager's email address.")
//                 } else {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             message: "What is your manager's office number? (required)",
//             name: 'managerOffice',
//             validate: (input) => {
//                 if (input === '') {
//                     return console.log("Please enter your manager's office number.")
//                 } else {
//                     return true;
//                 }
//             }
//         }
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
    // ])
    // .then((data) => {
        // const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

    //     fs.writeFile('index.html', teamContent(data), (err) => 
    //         err ? console.error(err) : console.log('Success! A README for your new project has been created.'))
    // });


// teamContent = (data) => {

// return content;
// };