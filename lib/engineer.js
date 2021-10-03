const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(github) {
        super(Employee);
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }
  
    getRole() {
        console.log('Engineer');
    }
  }

// const manager = new Manager()