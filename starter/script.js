"use strict";

///////////////////////////////////////
// Activating Strict Mode
// let driverLicense = false;
// const pass = true;

// if (pass) driverLicense = true;
// if (driverLicense) console.log('i can drive')

/////////////////////////////////////
//functions
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

/*///////////////////////////////
//function declaration
function calAge(birthYear) {
    const age = 2050 - birthYear;
    return age;
};
const age1 = calAge(2010);

///////////////////////////////////////
//function expression
const calAge2 = function (birthYear) {
    return 2050 - birthYear;
};
const age2 = calAge2(2010);

console.log(age1, age2);

//////////////////////////////////////
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

/*////////////////////////////////////////
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

//////////////////////////////
//Review functions
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

//////////////////////////////////////
// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times and then the average of the 3 scores ,is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the consothe winner to le, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 
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

////////////////////////////////
// Introduction to Arrays
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

//coding challenge- 2
const calcTip = function (bill) {
  return;
};

/*////////////////////////////////////////
//object 
const jonasArray = [
    'Jonas',
    'william',
    35,
    'teacher',
    ['Nader', 'David', 'John']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Warner',
    Age: 35,
    Job: 'teacher',
    friends: ['Nader', 'David', 'John']
}
console.log(jonas.firstName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interested = prompt('What you want to know about jonas? name, job, age, friends?');
// console.log(jonas[interested]);

if (jonas[interested]) {
    console.log(interested)
} else {
    console.log('wrong typing! inter a valid info.')
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friends is called ${jonas.friends[0]}.`);
console.log(jonas['firstName'])
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Warner',
    birthYear: 1990,
    Job: 'teacher',
    friends: ['Nader', 'David', 'John'],
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};
console.log(jonas.calcAge());
console.log(jonas.age);
// console.log(jonas['calcAge'](2000));\
*/

/////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

/*
const MarkMillerBio = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
const johnSmithBio = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

MarkMillerBio.calcBmi();
johnSmithBio.calcBmi();

console.log(MarkMillerBio.BMI, johnSmithBio.BMI);

if (MarkMillerBio.calcBmi() > johnSmithBio.BMI) {
    console.log(`${MarkMillerBio.fullName} BMI ${MarkMillerBio.calcBmi()} is higher then ${johnSmithBio.fullName}`)
} else if (johnSmithBio.BMI > MarkMillerBio.calcBmi()) {
    console.log(`${johnSmithBio.fullName} BMI ${johnSmithBio.BMI} is higher then ${MarkMillerBio.fullName}`)
}
*/

/////////////////////////////////////////
/*
//forloop
console.log('Lifting weights repeating 1');
console.log('Lifting weights repeating 2');
console.log('Lifting weights repeating 3');
console.log('Lifting weights repeating 4');
console.log('Lifting weights repeating 5');
console.log('Lifting weights repeating 6');

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repeating ${i}`)
}
*/

/*
const jonas = [
    'Jonas',
    'william',
    35,
    'teacher',
    ['Nader', 'David', 'John'],
    true
]
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i])
};

const years = [1990, 1992, 1998, 2005];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
};
console.log(ages);

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i])
};
*/

//////////////////////////////////
/*
//loop in loop

const jonas = [
    'Jonas',
    'william',
    35,
    'teacher',
    ['Nader', 'David', 'John'],
    true
]

for (let i = jonas.length; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---exercise--- ${exercise}`);

    for (let rep = 1; rep <= 3; rep++) {
        console.log(`repeating- ${rep}`)
    }
}
*/

/*
// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repeating ${i}`)
// }

let i = 1;
while (i <= 10) {
    console.log(`Lifting weights repeating ${i}`);
    i++;
};

let dice = Math.trunc(Math.random() * 6) + 1;

if (dice !== 6) {
    console.log(`show the result ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end!')
}
*/

// test challenge
const calcTips = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(tips, total);
