class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // these will be returned via prompts from 'inquirer'
    }

    getId() {

    }
    
    getEmail() {

    }
    
    getRole() {
        console.log('Employee');
    }
}

module.exports = Employee;