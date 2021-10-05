const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(school) {
        super(Employee);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
  
    getRole() {
        return 'Intern';
    }
}