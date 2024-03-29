// It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments
// and returns their product (multiply them together).  Make sure to return the value instead of printing it!

multiply(2, 3) // 6
multiply(9, 9) // 81
multiply(5, 4) // 20
// DEFINE YOUR FUNCTION BELOW:
function multiply(num1, num2) {
    return num1 * num2;
}

// I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather. 

// It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 

// If temperature is greater than or equal to 75, return true. 

// Otherwise, return false.   

// This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

// Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3, 5, 7]) //7
lastElement([1]) //1
lastElement([]) //null

// DEFINE YOUR FUNCTION BELOW:
function lastElement(numbers) {
    if (numbers.length === 0) { return null; }
    return numbers[numbers.length - 1];
}


// Capitalize Exercise
// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"
// Hints:

// Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.

// Single out the first letter and capitalize it. (use a string method to help!)

// Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)

// For example: 'eggplant' becomes 'E' + 'ggplant'

// DEFINE YOUR FUNCTION BELOW:
function capitalize(stringValue) {
    let firstchar = stringValue[0].toUpperCase();
    let newStringValue = stringValue.slice(1);
    return firstchar.concat(newStringValue);
}

// Sum Array Exercise
// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101

// DEFINE YOUR FUNCTION BELOW:
function sumArray(arrayOfNums) {
    let total = 0;
    for (let num of arrayOfNums) {
        total += num;
    }
    return total;
}

// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

// Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null

// DEFINE YOUR FUNCTION BELOW:
function returnDay(numberOfADay) {
    let dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (numberOfADay <= 7 && numberOfADay >= 1) { return dayArray[numberOfADay - 1]; }
    else {
        return null;
    }
}

// Methods Exercise
// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

// area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

// perimeter should accept the length of a side and return that side multiplied by 4.

// square.area(10) //100
// square.perimeter(10) //40
let square = {
    area(side) { return side * side },
    perimeter(side) { return side * 4 }
};


// Define an object called hen.  It should have three properties:

// name should be set to 'Helen'

// eggCount should be set to 0

// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2
let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
};

// Map Practice
// It's time to get practice with the map method!

// Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

// e.g.,

// console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']


// Please note:

// The fullNames array is an array of objects with each object containing properties for the first and last names of each character. You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.

// This exercise has been updated, you may see Q&A threads from this lecture that relate to the original exercise which no longer exists. They can be ignored.

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
let firstNames = fullNames.map(function (fullNamesObj) {
    return fullNamesObj.first;
});
// Arrow Function Exercise
// Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

// greet("Hagrid") //"Hey Hagrid!" 
// greet("Luna") //"Hey Luna!"
// Be sure to use arrow function syntax!
const greet = (name) => {
    return `Hey ${name}!`;
};

// Filter Exercise
// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// // => ["mark", "carrie98", "MoanaFan"]


// Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

// function validUserNames(usernames) {
//   // your code here
// }

function validUserNames(usernames) {
    return usernames.filter((username) => username.length < 10);
}

// Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)

// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false
const allEvens = array => array.every(num => num % 2 === 0);