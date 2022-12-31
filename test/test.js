var testingQuotes = "hello"
var testingSemicolon = 123;
let testingPreferConst = 123;

// TODO Space inside empty function call

/**
 * @description Logs out hello world.
 * @returns {void}
 */
function testingIndentation() {
    console.log('hello world')
}

testingIndentation()

(function() { return 'bar' }())

if(testingPreferConst == testingPreferConst) {

}

let str = 'no-template-curly-in-string ${helo}'

if(typeof str == 'string') {
    console.log('asd')
}
