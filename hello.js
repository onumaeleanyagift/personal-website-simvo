console.log('\nEXERCISE 1\n')
let multiplicand = 4
let multiplier = 5
let product = 0

for (let i = 0; i < multiplier; i++) {
    // console.log(i)
    product += multiplicand
}

console.log("Final product of " + multiplicand + " times " + multiplier + ": " + product)

// Ex 2 - Sum of numbers from 1 to x
console.log("\nEXERCISE 2\n");

let stopSum = 6
let finalSum = 0

for (let i = 1; i <= stopSum; i++) {
    finalSum += i
}

console.log("Sum of all numbers between 1 and " + stopSum + " is " + finalSum);


// Ex 3 - Array element of longest string
console.log("\nEXERCISE 3\n");

let groceryList = ["cherry", "tomato", "raspberry", "apple"]
let indexOfLongestString = 0
let maxLength = 0

for (let i = 0; i < groceryList.length; i++) {
    let elementLength = groceryList[i].length

    if (elementLength > maxLength) {
        indexOfLongestString = i
        maxLength = elementLength
    }

    if (elementLength > 8) {
        break
    }
}

console.log(groceryList)
console.log("Index of longest string in the array is: " + indexOfLongestString + " which is " + groceryList[indexOfLongestString])

// Nested Loop Challenge

// Ex 1

for (let i = 0; i < 4; i++) {
    console.log("__________")
    for (let j = 0; j < 4; j++) {
        console.log("i: " + i + " j: " + j)
    }
}

// Ex 2

let rows = 5

console.log('For rows = ' + rows)

for (let row = 1; row <= rows; row++) {
    let printValue = ""
    for (let column = 0; column < row; column++) {
      printValue += "*"
    }
    console.log(printValue)
}

// Iterables and Iteration Challenge

// Ex 1

let originalString = "This is a string"
console.log("Original: " + originalString)

let reverseString = ""

for (let character of originalString) {
    reverseString = character + reverseString
}

console.log(reverseString)

// Ex 2

let array = ["arrays", "are", "iterable"]
let characterCount = {}

console.log(array)

for (let element of array) {

    for (let character of element) {
        if ((character in characterCount)) {
            characterCount[character] += 1
        } else {
            characterCount[character] = 1
        }
    }
}

console.log(characterCount)


