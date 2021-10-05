class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {    
        return this.email;
    }
    
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;

const newEmp = new Employee("Greg", 1, "greg.g.zaragoza@gmail.com");
console.log(newEmp);
console.log(newEmp.getRole());
console.log(newEmp.getName());