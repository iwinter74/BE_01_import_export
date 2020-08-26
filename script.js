// const _ = require('lodash');

// const myfunctions = require('./myfunctions')

// const mydata = require('./mydata')

// console.log(myfunctions.myFunctionA(mydata.array1Key))
// console.log(myfunctions.myFunctionB(mydata.array1Key))
// console.log(myfunctions.myFunctionJ(mydata.stringKey))
// console.log(myfunctions.myFunctionI(mydata.aKey, mydata.bKey))


// console.log(myfunctions.functionOneKey(mydata.numbersArrayKey))


// console.log(_.head(mydata.numbersArrayKey))
// console.log(_.initial(mydata.numbersArrayKey))
// console.log(_.last(mydata.numbersArrayKey));
// console.log(_.drop(mydata.numbersArrayKey, [n = 1]))
// console.log(_.tail(mydata.numbersArrayKey)); // like drop
// console.log(_.nth(mydata.numbersArrayKey, 2))
// console.log(_.pull(mydata.numbersArrayKey, 6, 4545))
// console.log(_.uniq(mydata.numbersArrayKey))
// console.log(_.sum(mydata.numbersArrayKey))
// console.log(_.random(12, 56))
// console.log(_.capitalize('superman'))
// console.log(_.toUpper('test'))
// console.log(_.endsWith('test', 'c'))
// console.log(_.endsWith('test', 't'))

const os = require('os');
//free system memory
console.log(os.freemem())
//Returns the string path of the current user's home directory.
console.log(os.homedir());
//Returns the host name of the operating system as a string.
console.log(os.hostname());

console.log(os.networkInterfaces());

console.log(os.platform());
console.log(os.release());
console.log(os.freemem())
console.log(os.totalmem());

console.log(__filename)
//basename
const path = require('path');
console.log(path.basename(__filename))
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.extname('index.html'));
console.log(path.parse(__filename));
