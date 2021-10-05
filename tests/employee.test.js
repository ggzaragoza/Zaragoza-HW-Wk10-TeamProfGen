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

  describe("getRole", () => {
    it("should return string specifying role of 'Employee'", () => {
      const obj = new Employee();
      
      let str = 'Employee';
      const result = obj.getRole();
      
      expect(result).toEqual(str);
    });
  });
});
