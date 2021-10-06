const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
  
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

const newEng = new Engineer("Greg", 1, "greg.g.zaragoza@gmail.com", "ggzaragoza");
console.log(newEng);
console.log(newEng.getGithub());
console.log(newEng.getRole());