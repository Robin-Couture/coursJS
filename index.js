test

let myString1 = "Hello";
let myString2 = "World";
let myNumber = 12;
let myBool = true;
const Tab = [1, 2, 3];

console.log(myString1 + ' ' + myString2);
console.log(myNumber);
console.log(myBool);
console.log(Tab);

Tab.push(12);
Tab.push(8);
console.log(Tab);

let age = 15;

if (age >= 18) {
    console.log("Vous êtes majeur !")
} else {
    console.log("Vous êtes mineur !")
}


function sum (nombre1, nombre2) {
    return nombre1 + nombre2;
}

console.log("La somme est égale à", sum(2,3));

setTimeout(() => {console.log('hellow, world! ')},1000);

let texte = 'Fleur';
let tabTexte1 = [texte];
let tabTexte2 = [...texte];

console.log(tabTexte1);
console.log(tabTexte2);
