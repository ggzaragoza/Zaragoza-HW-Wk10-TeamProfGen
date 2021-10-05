const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(github) {
        super(Employee);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
  
    getRole() {
        return 'Engineer';
    }
}