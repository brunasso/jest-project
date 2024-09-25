

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromEuroToDollar(euro) {
    return (euro * 1.07);
}
function fromDollarToYen(dollar) {
    let euros = dollar / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };