// Question 100
function SquareNumber(num:number):number{
    return Math.sqrt(num);
}

console.log(SquareNumber(64));

// Question 101
let num:number = Math.ceil(Math.random()*10)+1;
console.log(num);

// Question 102
// Absolute is used to change negative sign into positive sign after calculation.
function AbsoluteValue(num:number):number{
    return Math.abs(num);
}

console.log(`Answer of 5 in absolute function is ${AbsoluteValue(5)}`);
console.log(`Answer of -5 in absolute function is ${AbsoluteValue(-5)}`);

let difference:number = Math.abs(-5 * 5);
console.log(difference);