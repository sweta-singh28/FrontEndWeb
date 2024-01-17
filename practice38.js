console.log("This is SWETA");

function greet(name, greetText= "Greetings from SWETA"){
    console.log(greetText + " " + name);
    console.log(name + " is a good girl");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
}

let name = "SWETA";
let name1 = "Joy";
let name2 = "Alex";
let name3 = "GROOT";
let greetText = "GOOD MORNING";

greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
//let returnval = greet(name3);
//console.log(returnval);

let returnval = sum(1, 2, 3);
console.log(returnval);
//console.log(name + " is a good girl");
//console.log(name1 + " hehehehe");
//console.log(name2 + " no");
//console.log(name3 + " sighhhh");
