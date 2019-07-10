const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("Adds 2+2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
//toBe Falsy
test("Should be falsey", () => {
  expect(functions.checkVal(0)).toBeFalsy();
});
//toBe Null
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
//toBe is for primitive types. Object is a reference type - stored in diff memory
//use toEqual
test("User should be Norm Warren object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Norm",
    lastName: "Warren"
  });
});
