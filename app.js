const fromEuroToDollar = (eur) => {
    return eur*1.2
}

const fromDollarToYen  = (usd) => {
    return usd*(127.9/1.2)
}

const fromYenToPound = (yen) => {
    return yen/(127.9/0.8)
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};