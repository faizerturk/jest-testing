const myFunction = require("../myFunction");

test("throws on invalid input", () => {
  expect(() => {
    myFunction("dsjnfsjnfjdsn");
  }).toThrow();
});
