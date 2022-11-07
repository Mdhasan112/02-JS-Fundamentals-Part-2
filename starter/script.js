'use strict';
// let driverLicense = false;
// const pass = true;

// if (pass) driverLicense = true;
// if (driverLicense) console.log('i can drive')

/*
function logger() {
    console.log('Hello World!')
};

logger();
logger();

function foodProcessor(apple, orange) {
    console.log(apple + orange);
    const juice = `i have ${apple} apple and ${orange} orange juices.`
    return juice;
};

const appleJuice = foodProcessor(10, 5);
console.log(appleJuice);
*/

/*
//function declaration
function calAge(birthYear) {
    const age = 2050 - birthYear;
    return age;
};
const age1 = calAge(2010);

//function expression
const calAge2 = function (birthYear) {
    return 2050 - birthYear;
};
const age2 = calAge2(2010);

console.log(age1, age2);

//Arrow function
const calAge3 = birthYear => 2050 - birthYear;
const age3 = calAge3(2010);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2050 - birthYear;
    const retirement = 70 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1998, 'hasan'));
console.log(yearsUntilRetirement(2005, 'rob')); 
*/

/*
//function into a function
function cutFood(fruits) {
    return fruits * 4;
}
function foodProcessor(apple, orange) {
    const appleJuice = cutFood(apple);
    const orangeJuice = cutFood(orange)

    const juice = `i have ${appleJuice} apple and ${orangeJuice} orange juices.`
    return juice;
};

const result = foodProcessor(2, 3);
console.log(result)
*/

const calcAge = function (birthYear) {
    return 2050 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 70 - age;
    if (retirement > 0) {
        return retirement;
        //console.log(`${firstName} retires in ${retirement} years`)
    } else {
        return -1;
        //console.log(`${firstName has already retaired} `)
    }
    return
}
console.log(yearsUntilRetirement(1998, 'hasan'));
console.log(yearsUntilRetirement(2005, 'rob')); 