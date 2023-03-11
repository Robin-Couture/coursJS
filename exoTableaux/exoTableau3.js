const nbPair = [2,4,6,8,10];
let calcul = 0;

for(index = 0; index < nbPair.length; index++){
    calcul = calcul + nbPair[index];
}

console.log('somme des nombres du tableaux =', calcul);