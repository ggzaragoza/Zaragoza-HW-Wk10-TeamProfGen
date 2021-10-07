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
                message: "Welcome to the Team Profile Generator. This application will generate a new team profile. A manager is required for each team. Please enter your manager's first and last name. (required)",
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

    const templateHTML = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;700;900&display=swap">
    <link rel="stylesheet" href="../src/style.css">
    <title>My Team Profile</title>
</head>

    <body>

        <header><h1>My Team Profile</h1></header>

        <main>
            ${formatTeam(teamMembers)}
        </main>

    </body>

</html>`;

    fs.writeFile('./dist/myteam.html', templateHTML, (err) => 
    err ? console.error(err) : console.log('Success! Your new team profile has been created.'))
}


formatTeam = (teamMembers) => {
    let content = '';

    teamMembers.forEach(buildCard);

    function buildCard(item) {
        let employeeInfo = '';

        if (item.getRole() === 'Engineer') {
            employeeInfo = 'GitHub: <a href="https://github.com/' + item.github + '" target="_blank">github.com/' + item.github + '</a>';
        } else if (item.getRole() === 'Intern')  {
            employeeInfo =  'School: ' + item.school;
        } else {
            employeeInfo = 'Office #: ' + item.officeNumber;
        };

        content +=
`
            <section>

                <div><h2>${item.name}</h2></div>
                <div><h3>${item.getRole()}</h3></div>
                <div><h4>ID: ${item.id}</h4></div>
                <div><h5><a href="mailto:${item.email}">${item.email}</a></h5></div>
                <div><h5>${employeeInfo}</h5></div>

            </section>
`;

    }

    return content;
}


addManager();