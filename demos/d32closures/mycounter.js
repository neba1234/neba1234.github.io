/*Write a function, makeCounter() that declares a local variable, count, and another local variable, innerFunc, which is an inner function;  
innerFunc will increment the count variable and return the incremented value.  makeCounter should return innerFunc.

Call it twice to make different counters, counter1 and counter2.  

Do they keep independent counts?
*/

function makeCounter(){
    let count = 0;
    const innerFunc = function(){
        count = count + 1;
        return count;
    }
    return innerFunc;
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
