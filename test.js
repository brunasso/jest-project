test("One euro should be 1.07 dollars", function () {
    // Import the function from app.js
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})



test("One dollar should be 146.26 yen", function () {
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});

test("100 yen should be 0.556 pounds", function () {
    const expected = (100 / 156.5) * 0.87;
    expect(fromYenToPound(100)).toBeCloseTo(expected);
});