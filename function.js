// let animals =['dog','cat','lion','fish']

// animals.sort(function (a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
//     return 0;
// });
// console.log(animals)

function sortArray(arr) {
    return arr.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
}

// console.log(sortArray(['test','yes','no','maybe']))

module.exports = sortArray