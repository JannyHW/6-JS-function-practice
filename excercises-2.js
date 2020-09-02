// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------
function max(a, b) {
if (a > b) {
   return a
} else {
   return b
}
}

console.log(max(2,3))
console.log(max(23,24))
console.log(max(-23, 12))

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------

console.log(maxOfThree(2,56,3) === 56)
console.log(maxOfThree(12,3,4) === 12)
console.log(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------

console.log(isVowel(0) === false);
console.log(isVowel("B") === false);
console.log(isVowel("b") === false);
console.log(isVowel("a") === true);
console.log(isVowel("E") === true);
console.log(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------

console.log(rovarspraket("a") === "a")
console.log(rovarspraket("b") === "bob")
console.log(rovarspraket("cat") === "cocatot")
console.log(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.log(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------


console.log(reverse("books") === "skoob")
console.log(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")