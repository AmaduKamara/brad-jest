const reverseString = require("./reversestring");

test("reverseString function exist", () => {
  expect(reverseString).toBeDefined();
});

test("String reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
