const months = ['Jan', 'Feb', 'March'];

console.log(typeof months); // object
console.log(months[0]); // Jan
months[4] = 'May';
console.log(months.length);

for(let i = 0; i < months.length; i++){
    console.log(months[i]);
}

const values = [ 
    'Apple',
    { name: 'John' },
    1,
    true,
    fun = () => {
        console.log('hi');
    }
]

/**  Array Methods (push, pop, shift, unshift, splice, slice) **/

const names = ['Milos', 'Bob', 'David'];

// Array Push  -adds a new element containing the entered value to the end of the array
names.push('Jon');
const length = names.push('Jon'); // 4

// Array Pop - Deletes the last element of an array
names.pop();
const removeValue = names.pop(); // Jon

// Array Shift - Deletes the first element of an array
names.shift();

// Array Unshift - Adds a new value to the start of an array
names.unshift('Dean');

// Array Splice - It adds/remove values from any position of an array
names.splice(2, 0, 'Jenny', 'Johny'); 

// Array Slice - Copies certain parts of an array into a newely created array
const noOneLikesMilos = names.slice(1); // ['Bob', 'David']

/** Array ForEach **/

const names = ['Milos', 'Bob', 'David'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
};

names.forEach((name, i) => {
    console.log(name, i);
})

const values = names.forEach((name, i) => name); // undefined

let sum = 0;
const numbers = [65, 55, 44];
numbers.forEach((number) => {
    sum += number;
});


