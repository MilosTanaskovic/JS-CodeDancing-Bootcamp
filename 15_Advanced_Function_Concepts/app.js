// pure func
function add(num1, num2) {
    return num1 + num2;
}

// impure func
function addRandom(num1) {
    return num1 + Math.random();
}

// pure func with side effect
//a
let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 5));

//b
const hobbies = ['Sports', 'Cooking'];

function printHobbies(h){
    h.push('NEW HOBBIES');
    console.log(h);
}

printHobbies(hobbies);

// Factory func

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

// Closurs

let userName = 'Max';

function greetUser() {
    let name = 'Anna';
    console.log('Hi' + name);
}

let name = 'Nick';

userName = 'Mili';

greetUser();

// Recursion

// function powerOf(x, n){
//     let result = 1;

//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result;
// }

// a
function powerOf(x, n){
    if(n === 1) return x;
    return x * powerOf(x, n -1);
}

// b
function powerOf(x, n) {
    return n === 1 ? x : x * powerOf(x, n - 1);
}
powerOf(2, 3) // 2 * 2 * 2

