const newfunctions = require('./newfunctions')
const newdata = require('./newdata')
const _ = require('lodash');

console.log(newfunctions.bigCitiesKey(newdata))
console.log(newfunctions.smallCitiesKey(newdata))

console.log(_.filter(newdata, function (e) { return e.population < 100000; }))
console.log(_.filter(newdata, function (e) { return e.population > 100000; }))

