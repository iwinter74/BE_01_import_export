

function bigCities(arr) {
    var bigCities = arr.filter(elt => elt.population > 100000)

    return bigCities
}

function smallCities(arr) {
    var smallCities = arr.filter(elt => elt.population <= 100000)

    return smallCities
}

module.exports.bigCitiesKey = bigCities
module.exports.smallCitiesKey = smallCities



