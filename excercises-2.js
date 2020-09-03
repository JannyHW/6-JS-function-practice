// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.assert(max(2, 3));
console.assert(max(23, 24));
console.assert(max(-23, 12));

// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c && b > a) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

// Read more: https://www.java67.com/2019/05/how-to-find-largest-and-smallest-of-three-numbers-in-java.html#ixzz6WqBvjxHd

console.assert(maxOfThree(2, 56, 3));
console.assert(maxOfThree(12, 3, 4));
console.assert(maxOfThree(-12, 4, -5));

// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------

function isVowel(key) {
  if (
    key === "a" ||
    key === "e" ||
    key === "i" ||
    key === "o" ||
    key === "u" ||
    key === "A" ||
    key === "E" ||
    key === "I" ||
    key === "O" ||
    key === "U"
  ) {
    return true;
  } else {
    return false;
  }
}
console.assert(isVowel(0));
console.assert(isVowel("B"));
console.assert(isVowel("b"));
console.assert(isVowel("a"));
console.assert(isVowel("E"));
console.assert(isVowel("2"));

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(str) {
  if (typeof str !== "string") {
    return str;
  }
  let rovar = "";
  for (i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      rovar += str[i];
    } else {
      rovar += str[i] + "o" + str[i];
    }
  }
  return rovar;
}
console.assert(rovarspraket("a"));
console.assert(rovarspraket("b"));
console.assert(rovarspraket("cat"));
console.assert(rovarspraket("javascript"));
console.assert(rovarspraket(0));

// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------

function reverse(str) {
  let backword = "";
  for (var i = str.length - 1; i >= 0; i--) {
    backword += str[i];
  }
  return backword;
}
console.assert(reverse("books"));
console.assert(reverse("we don't want no trouble"));
