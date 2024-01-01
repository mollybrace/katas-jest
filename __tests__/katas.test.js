const {
    reverseString,
} = require("../katas")


describe("reverseString", () => {
    test("given a one letter input returns that input", () => {
        const input = "H"
        expect(reverseString(input)).toEqual("H")
    })
    test("given a string gives the reverse of that string", () => {
        const input = "Hello"
        expect(reverseString(input)).toBe("olleH")
    })
})

