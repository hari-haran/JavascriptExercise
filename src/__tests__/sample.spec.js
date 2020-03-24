
const getHelloWorld = require('../sample.js')
 
describe("#getHelloWorld", () => {
    it("Should return Hello World", () => {
        const expected = "Hello World"
        expect(getHelloWorld()).toEqual(expected)
    })
})