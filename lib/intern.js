const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
  
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;

const newInt = new Intern("Greg", 1, "greg.g.zaragoza@gmail.com", "The University of Texas at Austin");
console.log(newInt);
console.log(newInt.getSchool());
console.log(newInt.getRole());