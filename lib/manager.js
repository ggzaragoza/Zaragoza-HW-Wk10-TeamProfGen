const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(officeNumber) {
        super(Employee);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
  
    getRole() {
        return 'Manager';
    }
}