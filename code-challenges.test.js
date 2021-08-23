// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { TestWatcher } = require("jest")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.
/////////////////////////////////////////////////////////////////////////////////////////////// Todd's Pseudo Code ////////////////////////////////////////////////////////////////////////////////
// So the first step is to create a test which as you can see I've done by calling my function OCC
// The test however fails because we have not written on her function
// I know that the function is supposed to take in name and occupation and put them together in a sentence
// Before I created the function I created a helper in order to make sure that The first and last name would be capitalized
// once the helper is done then it put it through my other function and put it together in a string
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with an expect statement using the variable provided.
describe("occ", () => {
  test("takes in an array of objects and returns an array with a sentence about each person with their names capitalized.", () => {
    var people = [
      { name: "ford prefect", occupation: "hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "radio employee" }
    ];

    expect(occ(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  });

  
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

})


// b) Create the function that makes the test pass.
var occ = (arr) => {
  var peopleSentences = [];

  function capitalizeName(name) {
    var nameArr = name.split(' ');
    var capName = '';

    for(var i = 0; i < nameArr.length; i++) {
      capName = capName ? `${capName} ${nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1)}` : `${nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1)}`;
    }

    return capName;
  }

  for(var i = 0; i < arr.length; i++) {
    peopleSentences.push(`${capitalizeName(arr[i].name)} is a ${arr[i].occupation}.`);
  }

  return peopleSentences;
  
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
/////////////////////////////////////////////////////////////////////////////////////////////// Todd's Pseudo Code ////////////////////////////////////////////////////////////////////////////////
// As you can see I did the same thing in this question I set up the test and called my function remainder.
// Then the test fails because I hadn't wrote an out my function yet.
// When it comes to my function I knew that I needed to pass it through something in order to separate the numbers out of this array
// Reason for that is because not everything in the Ray is a number so I used the parseInt I said as you can clearly see
// It was having a hard time figuring out what to do with zero so I had to use an Else if statement in order to handle it
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('takes in mixed data array and returns remainders when divided by 3', () => {
  test('returns remainder', () => {
    expect(remainder(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  });
})


// b) Create the function that makes the test pass.
var remainder = (arr) => {
  var remainders = [];

  for(var i = 0; i < arr.length; i++) {
    if(parseInt(arr[i])){
      remainders.push(arr[i] % 3);
    }else if(arr[i] === 0) {
      remainders.push(arr[i] % 3);
    }
  }

  return remainders;
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
/////////////////////////////////////////////////////////////////////////////////////////////// Todd's Pseudo Code ////////////////////////////////////////////////////////////////////////////////
// once again we start with our test which ultimately feels because we haven't wrote the function out but once I know that I have a good fill I can start working on my function
// In order to write this function I start with a empty variable that I have called sum of cubed
// Are used a for loop here and it starts at the beginning and works its way through the length of the array and cubes it by Multiplying the numbers
// And that gives me my expected outcomes which makes the test pass
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
describe('takes in an array of numbers and returns the sum of all the numbers cubed.', () => {
  test('numbers cubed', () => {
    expect(cubed(cubeAndSum1)).toEqual(99);
    expect(cubed(cubeAndSum2)).toEqual(1125);
  });
});


// b) Create the function that makes the test pass.

var cubed = (arr) => {
  var sumOfCubed = 0;

  for(var i = 0; i < arr.length; i++) {
    sumOfCubed += (arr[i] * arr[i] * arr[i]);
  }

  return sumOfCubed;
}