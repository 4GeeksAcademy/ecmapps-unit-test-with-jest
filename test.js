test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.583 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(2.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 1 * 106.583; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2.5)).toBe(266.45833333333337); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One pound should be 159.875 yen", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(2.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 350 / 159.875; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(350)).toBe(2.18921032056294); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})