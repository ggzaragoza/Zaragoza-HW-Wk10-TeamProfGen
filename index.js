const fs = require('fs');
const inquirer = require('inquirer');

// const employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Employee = require('./lib/employee.js');


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
        });
};


buildTeam = () => {
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

generateTeamProfile = () => {
    console.log(teamMembers);
    formatTeam(teamMembers);

    fs.writeFile('./dist/index.html', formatTeam(teamMembers), (err) => 
    err ? console.error(err) : console.log('Success! Your new team profile has been created.'))
}

formatTeam = (teamMembers) => {
    let content = "";

    teamMembers.forEach(buildCard);

    function buildCard(item) {
        let employeeInfo = '';

        if (item.getRole() === 'Engineer') {
            employeeInfo = item.github;
        } else if (item.getRole() === 'Intern')  {
            employeeInfo = item.school;
        } else {
            employeeInfo = item.officeNumber;
        };

        content +=
`
<h2>${item.name}</h2>
<h2>${item.getRole()}</h2>
<h3>${item.id}</h3>
<h4><a href="mailto:${item.email}">${item.email}</a></h4>
<h5>${employeeInfo}</h5>`;

    }

    return content;
}

addManager();


// teamContent = (data) => {

// return content;
// };