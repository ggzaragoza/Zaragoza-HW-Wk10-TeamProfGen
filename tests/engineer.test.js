const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
    // it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
    //   expect("id" in obj).toEqual(true);
    //   expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("id" in obj).toEqual(true);
    });

    it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("github" in obj).toEqual(true);
    });
  });

  describe("getGithub", () => {
    it("should return string specifying entered GitHub username", () => {
      const obj = new Engineer();
      
      let str = this.github;
      const result = obj.getGithub();
      
      expect(result).toEqual(str);
    });
  });


  describe("getRole", () => {
    it("should return string specifying role of 'Engineer'", () => {
      const obj = new Engineer();
      
      let str = 'Engineer';
      const result = obj.getRole();
      
      expect(result).toEqual(str);
    });
  });
});
