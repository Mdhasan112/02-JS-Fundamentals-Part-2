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

/*
const calcAge = function (birthYear) {
    return 2050 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 70 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
};

console.log(yearsUntilRetirement(2000, 'John'));
console.log(yearsUntilRetirement(1971, 'John'))
*/


/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(2, 3, 4));

//Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins🥇${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins🥇${avgKoalas} vs. ${avgDolphins}`)
    } else {
        console.log('No tim win')
    }
}
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const friend1 = 'Michael';
const friend2 = 'Ross Tailor';
const friend3 = 'David';

const friends = ['Michael', 'Ross Tailor', 'David']
//friends[2] = 'Milan'
console.log(friends);
console.log(friends[friends.length - 2])

const years = new Array(1990, 1991, 1992, 1993);
console.log(years);

const firstName = 'Jonas';
const jonas = [firstName, 'Warner', 2022 - 1995, 'Teacher', friends];
console.log(jonas);

// Array Exercise
const calcAge = function (birthYear) {
    return 2050 - birthYear;
}
const y = [1990, 2002, 1998, 1999];
console.log(calcAge(years[0]));
*/

/*
const friends = ['Michael', 'Ross Tailor', 'David'];

//add element
const newFriends = friends.push('Nadir'); //last
console.log(friends);

friends.unshift('Rohim'); //first
console.log(friends)

//remove element

friends.pop()
console.log(friends) //last

friends.shift();
console.log(friends);

console.log(friends.indexOf('Ross Tailor'));

console.log(friends.includes('Ross Tailor'));
console.log(friends.includes('Michael'));

if (friends.includes('Ross Tailor')) {
    console.log('you have a friend Ross Tailor')
};
*/