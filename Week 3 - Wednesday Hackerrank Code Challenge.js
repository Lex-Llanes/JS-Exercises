// Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Task

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
// Function Description

// Complete the vowelsAndConsonants function in the editor below.

// vowelsAndConsonants has the following parameters:

// string s: the string to process
// Prints

// Print each vowel of  in order on a new line, then print each consonant in order on a new line. Return nothing.
// Input Format

// There is one line of input with the string .

// Output Format

// First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

// Sample Input 0

// javascriptloops
// Sample Output 0

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s


function vowelsAndConsonants (s) {
  let i = 0;
  let vowels = [];
  let consonants = [];
  while (i < s.length){
      if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
        vowels.push(s[i])
      } else {
        consonants.push(s[i])
      }
      i++
  }
console.log(vowels)
console.log(consonants);
}

vowelsAndConsonants("helloworld");






















// write a function called calculate that takes in 3 arguments. You can choose the parameter names for the arguments.

// The first argument should be a number
// The second argument should be a string that contains one math operator (eg: '+' or '-' or '*' or '/' or '%')
// The third argument should be a number
// The calculate function should return the result of the math expression that you've specified using the arguments. You'll need to code the logic so the function knows how to handle all the various math operators.

// For example, the function call might look like this: calculate(3, '+', 7) And in this example, the function should return 10.




function calculate (firstNum, operator, secondNum) {


 switch (operator) {
    case "+":
       return firstNum + secondNum;
    case "/":
       return firstNum / secondNum;
    case "-":
       return firstNum - secondNum;
    case "*":
       return firstNum * secondNum;
    case "%":
       return firstNum % secondNum;
    default:
       return 0;
 }

}

console.log(calculate(1, "+" ,3));









////////////////////////////////////////////////////////////////////////////////////////
// Activity: Movie Night Suppose 5 classmates are interested in going to see a movie together. There are some interesting dynamics between the people in this group, as described below:

// Priya will attend only if Ming goes.
// David loves popcorn and will go to the movies under any circumstance
// Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
// Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
// Breanna loves to be around people and will only go if there are at least 2 others going
// Write a function called movieNight that takes in an array. The array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies. And the array should include all the combinaton of three names out of five(total 10 possible array input). Write a body for the movieNight function, based on the "rules" associated with each of the names above, that returns an array of the people who will attend the movie. Your function should account for the logic necessary for all 5 people, so that no matter which names are given, the result will always be correct. (ie: Don't just code the logic for 3 of the names and pass those names in all the time.) In case there are multiple answer for a single triplet or input string display all the possible correct answer for that triplet.





function movieNight(array) {
let pplGoing = [];

switch(true){
  case (array[0] == "Priya"):
    switch (true){
      case (array[1] != "David" && array[2] != "David"):
        pplGoing.push("Priya", "Ming", "Breanna")
        break;
      case (array[1] == "David" || array[2] =="David") :
        pplGoing.push("Alex", "David", "Breanna");
        break;
      }
    break;



  case (array[0] == "David"):
    pplGoing.push("David", "Alex", "Breanna");
    break;


  case(array[0] == "Alex"):
    pplGoing.push("Alex", "David", "Breanna");
    break;
  

  case(array[0] == "Ming"):
    switch(true) {
      case (array[1] != "David" || array[2] != "David"):
      pplGoing.push("Ming", "Priya", "Breanna");
      break;
    }
  

  case((array[0] == "Breanna" && array[1] == "" && array[2] == "") || (array[1] == "Breanna" && array[0] == "" && array[2] == "") || (array[2] == "Breanna" && array[0] == "" && array[2] == "")):
    pplGoing.push("Canceled, Breanna will not go alone.");
    break;


  case(array[0] == "" && array[1] == "" && array[2] == ""):
    pplGoing.push("No One Is Going.");
    break;


  default:
    pplGoing.push("Push insert an array with 3 parameters!")
    break;
}
console.log(pplGoing);
}



movieNight(["Alex", "Ming", "David"]) //"Alex", "Ming", "David"
movieNight(["David", "Ming", "Breanna"]) //"David", "Ming", "Breanna"
movieNight(["Priya", "Ming", ""]) //"Priya", "Ming", "Breanna"
movieNight(["", "Breanna", ""]) //"Canceled, Breanna will not go alone."
movieNight(["", "", ""]) //"No One Is Going."



