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

//coding challenge- 2
const calcTip = function (bill) {
    return
}

/*
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

/*
//challenge- 3
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