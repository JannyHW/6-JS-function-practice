// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];
var instructors = [
  { firstname: "JD", teaches: "JavaScript" },
  { firstname: "Tim", teaches: "JavaScript" },
  { firstname: "Brit", teaches: "Ruby" },
  { firstname: "Joe", teaches: "iOS" },
  { firstname: "Jake", teaches: "JavaScript" },
  { firstname: "Will", teaches: "JavaScript" },
  { firstname: "Calvin", teaches: "JavaScript" },
  { firstname: "James", teaches: "Ruby" },
];

// ---------------------------
// 1. Find largest number
// ---------------------------
let largestNum = Math.max(...numbers);
console.log(largestNum);

// ---------------------------
// 2. Find longest string
// ---------------------------
let longestStr = strings.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});

// ---------------------------
// 3. Find even numbers
// ---------------------------
let evenNum = numbers.filter(function (x) {
  if (x % 2 === 0) {
    return x;
  }
});
console.log(evenNum);

// ---------------------------
// 4. Find odd numbers
// ---------------------------
let oddNum = numbers.filter(function (x) {
  if (x % 2 !== 0) {
    return x;
  }
});
console.log(oddNum);

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function findIs(str) {
  let found = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("is")) {
      found += str[i] + " ";
    }
  }
  return found;
}
console.log(findIs(strings));
// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
let join = numbers + strings;
console.log(join);

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
function teachersJS(x) {
  let teachJS = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i].teaches.includes("JavaScript")) {
      teachJS += x[i].firstname + " ";
    }
  }
  return teachJS;
}
console.log(teachersJS(instructors));
