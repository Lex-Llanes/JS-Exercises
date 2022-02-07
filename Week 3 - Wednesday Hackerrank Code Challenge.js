/*Hackerrank Code Challenge*/
//Objective

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


function vowelsAndConsonants (s) {
    let i = 0;
    let vowels = [];
    let consonants = [];
    while (i <= s.length){
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














