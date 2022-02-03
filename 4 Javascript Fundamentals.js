// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.


function divByThree (numPassed) {
    if(numPassed % 3 === 0){
        return true;
    } 
    return false;
}

console.log(divByThree(12));//true
console.log(divByThree(1));//false
console.log(divByThree(4));//false
console.log(divByThree(6));//true
console.log(divByThree(-3));//true





// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

