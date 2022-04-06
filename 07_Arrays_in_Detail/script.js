// const months = ['Jan', 'Feb', 'March'];

// console.log(typeof months); // object
// console.log(months[0]); // Jan
// months[4] = 'May';
// console.log(months.length);

// for(let i = 0; i < months.length; i++){
//     console.log(months[i]);
// }

// const values = [ 
//     'Apple',
//     { name: 'John' },
//     1,
//     true,
//     fun = () => {
//         console.log('hi');
//     }
// ]

// /**  Array Methods (push, pop, shift, unshift, splice, slice) **/

// const names = ['Milos', 'Bob', 'David'];

// // Array Push  -adds a new element containing the entered value to the end of the array
// names.push('Jon');
// const length = names.push('Jon'); // 4

// // Array Pop - Deletes the last element of an array
// names.pop();
// const removeValue = names.pop(); // Jon

// // Array Shift - Deletes the first element of an array
// names.shift();

// // Array Unshift - Adds a new value to the start of an array
// names.unshift('Dean');

// // Array Splice - It adds/remove values from any position of an array
// names.splice(2, 0, 'Jenny', 'Johny'); 

// // Array Slice - Copies certain parts of an array into a newely created array
// const noOneLikesMilos = names.slice(1); // ['Bob', 'David']

// /** Array ForEach **/

// const names = ['Milos', 'Bob', 'David'];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// };

// names.forEach((name, i) => {
//     console.log(name, i);
// })

// const values = names.forEach((name, i) => name); // undefined

// let sum = 0;
// const numbers = [65, 55, 44];
// numbers.forEach((number) => {
//     sum += number;
// });

/** Array Map **/
// const inventory  = [
//     { price: 5, name: 'eggs' },
//     { price: 4, name: 'ham' },
//     { price: 3, name: 'mayo' },
//     { price: 5, name: 'bread' },
// ];

// const prices = inventory.map((item) => item.price);
// const names = inventory.map((item) => item.name);

// console.log(prices, names);

/** Array Filter **/
// const numbers = [ -10, 0, -2, 15, -36, 25];

// const positiveNumbers = numbers.filter((number) => {
//     return number >= 0;
// });

// console.log(positiveNumbers);

// positiveNumbers1 = [];
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] >= 0){
//         positiveNumbers1.push(numbers[i]);
//     }
// }
// console.log(positiveNumbers1);
// /*
//     a start up want to reward the employees with 7 or more hours of vertime
// */
// const employeesData = [
//     { name: 'Sebastian', overtime: 3 },
//     { name: 'Cardi Vee', overtime: 10 },
//     { name: 'George Lopez', overtime: 12 }
// ]

// const employeesToReward = employeesData.filter((employe) => {
//     //return employe.overtime >= 7;
//     //or
//     if(employe.overtime >= 7) return true;
// })
// // console.log(employeesToReward);

// const empoyeeNames = employeesToReward.map((name) => name.name);
// //console.log(empoyeeNames);

// empoyeeNames.forEach((name) => console.log(`${name} received a reward!`));

/** Array Find  */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const value = numbers.find((number) => number > 5); // 6 > 5 true -> value = 6

// const states = ['Alaska', 'California', 'Colorado', 'Hawaii'];

// const state = states.find((state) => state.startsWith('C')); // California - true

/** Array Includes */
// const array1 = [1, 2, 3];

// console.log(array1.includes(1)); // true

// const pets = ['cat', 'dog'];

// console.log(pets.includes('at')); // false

// const bookshelf = ['Moby Dick', 'The Great Gatsby'];

// if(bookshelf.includes("Mob Dick") === true) {
//     console.log('we have a book'); // true
// } else {

// }

// if(bookshelf.includes("mob dick") === true) {
//     console.log('we have a book');
// } else {
//  // false
// }

// if(bookshelf.includes("Mob Dick")) {  // truthy value is includes method
//     console.log('we have a book'); // true
// } else {

// }

// /** Array Sort */

// const names = ['Anne', 'Carl', 'Bob', 'Dean'];

// const numbers = [1, 4, 15, 33, 2];

// numbers.sort(); // 1 , 15 , 2 ...

// // asceding Order
// numbers.sort((a, b) => a - b); 
// // Descending Order
// numbers.sort((a, b) => b - a); 

// names.sort(); // changed original array

/** Array Some & Every */
// const array = [1, 2, 3, 4, 5];

// // Array Some -> return true if at least one element passes the test
// const greaterThen3  = (number) => number > 3;

// console.log(array.some(greaterThen3)); // true

// // or
// console.log(array.some((el) => el > 5)); // false

// // Array Every -> return true if all elements pass the test
// console.log(array.some((el) => el > 3)); // false
// console.log(array.some((el) => el > 0)); // true

/** Array Reduce */
const groceryList = [29, 12, 45, 35, 87, 110];

// with forEach
let total = 0;

groceryList.forEach((price) => {
    total += price;
});

// with Reduce
const total = groceryList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, val) => {
    return acc + val;
}, 0);

// acc = 0, val = 1 => 0 + 1 === 1
// acc = 1, val = 2 => 1 + 2 === 3
// acc = 3, val = 3 => 3 + 3 === 6
// acc = 6, val = 4 => 6 + 4 === 10
// acc = 10, val = 5 => 10 + 5 === 15
// sum = 15



