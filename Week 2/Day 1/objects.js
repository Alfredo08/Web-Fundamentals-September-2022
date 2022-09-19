
let car = {
    color : "blue",
    year : 2020,
    make : "Toyota",
    print : function(){
        console.log( "This is a car" );
    },
    versions : [ "SE", "LE", "Sport" ],
    city : {
        name : "Dallas"
    }
};

car.year = 2021;

console.log( car.color );
console.log( car.year );
console.log( car.make );
car.print();
console.log( car.versions[2] );


let names = [{
    firstName : "Alex",
    lastName : "Miller"
},{
    firstName : "Martha",
    lastName : "Smith"
}];

console.log( names[1].lastName );

console.log( car.city.name );

let arr = [10, 20];

car.owner = "Michael";

console.log( car );
