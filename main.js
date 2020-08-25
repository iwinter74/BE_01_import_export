const logInFile = require('./logIn')
const signUp = require('./signUp')
const country = require('./logIn')

console.log(module)

console.log(logInFile.emilija)
comsole.log(logInFile.yahya)
logInFile.erhanFunction('Batman')

logIn('Superman')
signUp('Spiderman')

console.log("Node.js")

function sayHi(name) {
    console.log(`Ìch bin ${ name }`)
}
sayHi('Superman')

//window object
//window.alert()
//alert()


//window object

// document.getElementById (braucht ein Browser) - not existing in node.js

//global object

global.console.log("test")
// setTimeout()
// setInterval()
// clearIntervalclearTimeout

console.log(__dirname)
console.log(__filename)



