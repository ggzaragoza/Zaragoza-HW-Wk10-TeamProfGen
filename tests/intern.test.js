const Intern = require("../lib/intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
    // it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("name" in obj).toEqual(true);
    //   expect("id" in obj).toEqual(true);
    //   expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("id" in obj).toEqual(true);
    });

    it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("school" in obj).toEqual(true);
    });
  });

  describe("getSchool", () => {
    it("should return string specifying entered office number", () => {
      const obj = new Intern();
      
      let str = this.school;
      const result = obj.getSchool();
      
      expect(result).toEqual(str);
    });
  });


  describe("getRole", () => {
    it("should return string specifying role of 'Intern'", () => {
      const obj = new Intern();
      
      let str = 'Intern';
      const result = obj.getRole();
      
      expect(result).toEqual(str);
    });
  });
});
