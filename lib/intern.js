const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(school) {
        super(Employee);
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }
  
    getRole() {
        console.log('Intern');
    }
  }

// const manager = new Manager()