var testingQoutes = "hello"
var testingSemicolon = 123;
let testingPreferConst = 123;

// TODO Space inside empy function call
function testingIdentation(    ) {
    console.log('hello world')
}

testingIdentation()

(function() { return 'bar' }())

if(testingPreferConst == testingPreferConst) {

}

let str = 'no-template-curly-in-string ${helo}'

if(typeof str == 'string') {
    console.log('asd')
}
