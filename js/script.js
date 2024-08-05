// var userInput = (prompt('please write a number to Apply it with recursion '))
var userInput = prompt('Please write a number to apply it with recursion');
var number = parseInt(userInput);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

if (isNaN(number)) {
    alert(" Please enter a valid number. ");
} else {
    var result = factorial(number);
    console.log("The factorial of " + number + " is: " + result);
}


// Function to add two numbers
function sum(a, b) {
    return a + b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    return a / b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) return 'Factorial is not defined for negative numbers';
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Function to get the absolute value of a number
function absolute(value) {
    return Math.abs(value);
}

// Function to find the maximum between two numbers
function max(a, b) {
    return a > b ? a : b;
}

// Function to find the minimum between two numbers
function min(a, b) {
    return a < b ? a : b;
}

// Function to find the maximum and minimum in an array
function maxMinArray(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// Function to sort an array
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Function to calculate the factorial of each item in an array
function factorialArray(arr) {
    return arr.map(num => factorial(num));
}

// Function to show menu
function showMenu() {
    console.log("\t\t\t\t\t Welcome to Calculator App");
    console.log("Choose a number from the menu:");
    console.log("1 - Sum");
    console.log("2 - Subtract");
    console.log("3 - Multiply");
    console.log("4 - Divide");
    console.log("5 - Check Prime");
    console.log("6 - Factorial");
    console.log("7 - Absolute");
    console.log("8 - Max Between Two Numbers");
    console.log("9 - Min Between Two Numbers");
    console.log("10 - Max and Min in Array");
    console.log("11 - Sort Array");
    console.log("12 - Factorial of Array Items");
}
showMenu();
 
console.log('1- Sum =', sum(5, 3));
console.log('2- Multiply =', multiply(5, 3));
console.log('3- Divide=', divide(6, 3));
console.log('4- Subtract =', subtract(5, 3));
console.log('5- prime=', isPrime(7));
console.log('6- Factorial =', factorial(5));
console.log('7- Absolute value:', absolute(-7));
console.log('8- Max between two number:', max(3, 4));
console.log('9- Min betweentwo number:', min(3, 4));
console.log('10- Max and Min in array =', maxMinArray([10, 5, 12, 1]));
console.log('11- Sorted array ', sortArray([5, 6, 2, 1]));
console.log('12- Factorial of each item in array', factorialArray([2, 3, 4]));

