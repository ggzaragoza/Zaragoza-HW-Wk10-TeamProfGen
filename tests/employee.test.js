const Employee = require("../lib/employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
    // it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
    //   expect("id" in obj).toEqual(true);
    //   expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("id" in obj).toEqual(true);
    });

    it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("email" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return string containing name input", () => {
      const obj = new Employee();
      
      let str = this.name;
      const result = obj.getName();
      
      expect(result).toEqual(str);
    });
  });

  describe("getId", () => {
    it("should return string containing entered ID number", () => {
      const obj = new Employee();
      
      let str = this.id;
      const result = obj.getId();
      
      expect(result).toEqual(str);
    });
  });

  describe("getEmail", () => {
    it("should return string containing entered email address", () => {
      const obj = new Employee();
      
      let str = this.email;
      const result = obj.getEmail();
      
      expect(result).toEqual(str);
    });
  });

  describe("getRole", () => {
    it("should return string specifying role of 'Employee'", () => {
      const obj = new Employee();
      
      let str = 'Employee';
      const result = obj.getRole();
      
      expect(result).toEqual(str);
    });
  });
});
