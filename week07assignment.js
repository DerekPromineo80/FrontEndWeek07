/* Week 7 Assignment */

/* Question 1*/

/**
 * Create an array called "ages" that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value 
    of the first element in the array 
    from the value in the last element of the array.
        - Do not use numbers to reference the last element, 
        find it programmatically.
        - ages[7] - ages[0] is not allowed!

    b. Add a new age to your array and repeat the step above 
    to ensure it is dynamic. (works for arrays of different lengths).

    c. Use a loop to iterate through the array and calculate the average age.
    
*/
console.log("Prompt 1:")
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // This is the array
console.log(ages); // This shows the array in the console

let onePartA = ages[ages.length - 1] - ages[0]; // length - 1 is the last element; 0 is the first element
console.log(onePartA); // Should be 93 - 3 = 90;

ages.push(111); // this adds 111 to the end of the array
console.log(ages); // this shows the new array, 9 elements now, last one is 111

let onePartB = ages[ages.length - 1] - ages[0]; // should be 111 - 3 = 108;
console.log(onePartB); //108

// declaring this outside the loop so it can be used after the loop as well, 
// because of the scope of the loop 
let sumNumberOne = 0;
// This loop takes each of the the numbers in the array ages, depending on the index of the array and gives a value
// then accumulates those values to get a total value of the array
for (number = 0; number < ages.length; number++) {
    sumNumberOne += ages[number]; // adding using the addition assignment operator
}
// Then this declares a variable to hold the average, and takes the total divided by the
// number of elements that were in the array. The result is the average:
let avgNumOne = 0;
avgNumOne = sumNumberOne / ages.length;
console.log(avgNumOne);

/* Prompt #2 */
/*  */
console.log("Prompt 2:")
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// first loop:
let collectNameLengths = 0;
for (i = 0; i < names.length; i++) {
    collectNameLengths += names[i].length;
}
let avgNumTwo = 0
avgNumTwo = collectNameLengths / names.length;
console.log(avgNumTwo); // Average of the number of characters in each of the Array elements of names Array


/* Prompt #3 */
/* How do you access the last element of any array? */
console.log("Prompt 3:")
let arrayThreeFour = ["first", "second", "last"]; // example array
console.log(arrayThreeFour[arrayThreeFour.length-1]); // using arrayName.length - 1; 
// whatever the "arrayName" is 


/* Prompt #4 */
/* How do you access the first element of any array? */
console.log("Prompt 4:")
console.log(arrayThreeFour[0]); // arrayName[0] is always the first element



/* Prompt #5 */
/* Create a new array called nameLengths. Write a loop to 
iterate over the previously created names array 
and add the length of each name to the nameLengths array. */
console.log("Prompt 5:")
let nameLengths = []; // Establish an empty array to put elements into
for(i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); // looping through each index of the names array, 
    // calling the length, and then pushing that into the new array.
}
console.log(nameLengths); // output of the new array to prove it worked

/* Prompt #6 */
/* Write a loop to iterate over the nameLengths array 
and calculate the sum of all the elements in the array. */
console.log("Prompt 6:")
let sumOfSix = 0; // establishing a numerical variable to hold the sum
for(i = 0; i < nameLengths.length; i++) {
    sumOfSix += nameLengths[i]; // adding using the addition assignment operator
}
console.log(sumOfSix); // 3 + 5 + 3 + 5 + 4 + 3 = 23;

/* Prompt #7 */
/* Write a function that takes two parameters, word and n, 
as arguments and returns the word concatenated to itself
n number of times. 
(i.e. if I pass in 'Hello' and 3, 
I would expect the function to return 'HelloHelloHello').*/
console.log("Prompt 7:")
let sevenCollect = ""; // Establishing a blank string to build the concatenation
function promptSeven(word, n) {
    for(i = 0; i < n; i++) { // looping through the n number of times
        sevenCollect += word; // concatenation takes place here
    }
    return sevenCollect; // returning the concatenation after iteration
};
console.log(promptSeven("seven", 1)); // example one
console.log(promptSeven("seven", 2)); // example one
console.log(promptSeven("seven", 3)); // example one
console.log(promptSeven("seven", 4)); // example one

/* Prompt #8 */
/* Write a function that takes two parameters, firstName and lastName, 
and returns a full name. 
The full name should be the first and the last name separated by a space. */
console.log("Prompt 8:")
function promptEight(firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(promptEight("Isaac", "Newton"));

/* Prompt #9 */
/* Write a function that takes an array of numbers and 
returns true 
if the sum of all the numbers in the array is greater than 100. */
console.log("Prompt 9:")
let arrayNineOne = [1, 2, 3, 4, 5, 6]; // This should return false, it's less than 100
let arrayNineTwo = [10, 20, 30, 40, 50, 60]; // This should return true, it's more than 100
let arrayNineThree = [100, 200, 300, 400, 500, 600]; // This should return true, it's more than 100
function promptNine(array) {
    let sumOfNine = 0; // establishing a numerical variable to hold the sum
    for(i = 0; i < array.length; i++) { // looping through the array provided
        sumOfNine += array[i]; // adding using the addition assignment operator
    }
    let nineBooleanTrue = true; // establishing boolean
    let nineBooleanFalse = false; // establishing boolean
    if(sumOfNine > 100) { // Perforiming the if statement to check the sum
        return nineBooleanTrue; // return true
    } else {
        return nineBooleanFalse; // return false
    }
};
console.log(promptNine(arrayNineOne));  // check 1
console.log(promptNine(arrayNineTwo));  // check 2
console.log(promptNine(arrayNineThree)); // check 3

/* Prompt #10 */
/* Write a function that takes an array of numbers 
and returns the average of all the elements in the array. */
console.log("Prompt 10:")
function promptTen(array) {
    // Note: Realized I could use the code from prompt 1 to create this function
    let sumNumberOne = 0;
    for (number = 0; number < array.length; number++) {
        sumNumberOne += array[number];
    }
    let avgNumOne = 0;
    avgNumOne = sumNumberOne / array.length;
    return avgNumOne;
};

let arrayTenExample = [10, 20, 22, 24, 26]; // using an example array
console.log(promptTen(arrayTenExample)); // testing it to see that it works correctly.



/* Prompt #11 */
/* Write a function that takes two arrays of 
numbers and returns true if the average of the 
elements in the first array is greater 
than the average of the elements in the second array. */
console.log("Prompt 11:")
function promptEleven() {
    
};

/* Prompt #12 */
/* Write a function called willBuyDrink that takes 
a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */
console.log("Prompt 12:")
function willBuyDrink(isHotOutside, moneyInPocket) {
    if((isHotOutside == true) && (moneyInPocket > 10.50)){
        return true;
    } else {
        return false;
    }
};
// Four examples to test below:
let isHotOutsideTestOne = true;
console.log(willBuyDrink(isHotOutsideTestOne, 10.49)); // false
console.log(willBuyDrink(isHotOutsideTestOne, 10.51)); // true
let isHotOutsideTestTwo = false;
console.log(willBuyDrink(isHotOutsideTestTwo, 10.49)); // false
console.log(willBuyDrink(isHotOutsideTestTwo, 10.51)); // false

/* Prompt #13 */
/* Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it. */
/* ANSWER */
/* Creating a function that takes a string and writes it in reverse */
/* Creating an "Emordnilap" */
/* Because I thought that would be cool */
console.log("Prompt 13:")
function promptThirteen(word) {
    let newWord = "";
    for(i = word.length; i >= 0; i--) { // Do a sort of "Reverse loop"
        newWord += word.charAt(i); // perform the concatenation in a count down fashion
    }
    return newWord; // return the word
};

console.log(promptThirteen("Object")); // doing an example
console.log(promptThirteen("Array")); // and another 
console.log(promptThirteen("Map")); // and another