const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
  
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

const newMan = new Manager("Greg", 1, "greg.g.zaragoza@gmail.com", 234);
console.log(newMan);
console.log(newMan.getOfficeNumber());
console.log(newMan.getRole());
