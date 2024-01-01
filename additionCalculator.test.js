
const additionCalculator = require("./additionCalculator");

test.only("addition of 4 and 6 to equal 10", () => {
    expect(additionCalculator(4,6)).toBe(10)
})