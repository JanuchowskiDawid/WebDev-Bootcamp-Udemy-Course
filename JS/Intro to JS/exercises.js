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