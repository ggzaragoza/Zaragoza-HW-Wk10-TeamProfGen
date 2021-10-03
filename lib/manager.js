const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(officeNumber) {
        super(Employee);
        this.officeNumber = officeNumber;
    }
  
    getRole() {
        console.log('Manager');
    }
  }

// const manager = new Manager()