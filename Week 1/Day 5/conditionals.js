/*
if ( expression ){
    // If it evaluates to true, the code here gets executed
}

if( expression ){
    // If it evaluates to true, the code here gets executed
}
else{
    // If it evaluated to false, this gets executed instead
}
*/

let age = 25;
let firstName = "Alexander";

if( age >= 21 ){
    console.log( firstName, "You are allowed to drink in the US!" );
}
else{
    console.log( firstName, "You are not able to drink yet! Wait a couple of years." );
}

console.log( "This will always show because it's outside of the condition" );