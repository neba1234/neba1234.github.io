// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.

function sum(array) {
    let sum = array.filter(elem => elem > 20)
        .reduce((accum, elem, index, array) => accum + elem, 0);
    return sum;

}

console.log(sum([30, 30,10,5]));



//2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.


let getNewArray = function (array) {

    let newarray = array.filter(elem => elem.length > 5 && elem.includes('a'));
    return newarray;
};


// 3. Implement an arrow function with feature below:

// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

// let array = ['hi', [1, 2, 3], ['Hello', 'world']];

// let newarray = [...array[0], ...array[1], ...array[2]];


let concat = (str, array1, array2) => {
    let result = [...str, ...array1, ...array2];
    return result;
};

console.log(concat('hi', [1, 2, 3], ['Hello', 'world']))











