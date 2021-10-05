const Manager = require("../lib/manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
    // it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
    //   expect("id" in obj).toEqual(true);
    //   expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("id" in obj).toEqual(true);
    });

    it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("officeNumber" in obj).toEqual(true);
    });
  });

  describe("getOfficeNumber", () => {
    it("should return string specifying entered office number", () => {
      const obj = new Manager();
      
      let num = this.officeNumber;
      const result = obj.getOfficeNumber();
      
      expect(result).toEqual(num);
    });
  });


  describe("getRole", () => {
    it("should return string specifying role of 'Manager'", () => {
      const obj = new Manager();
      
      let str = 'Manager';
      const result = obj.getRole();
      
      expect(result).toEqual(str);
    });
  });
});
