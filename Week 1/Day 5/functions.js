function addTwoNums( num1, num2 ){
    let result = num1 + num2;
    return result;
}

let sum1 = addTwoNums( 50, 100 );
let sum2 = addTwoNums( 30, 10 );
let final = addTwoNums( sum1, sum2 );

console.log( "Sum1", sum1 );
console.log( "Sum2", sum2 );
console.log( "Final", final );