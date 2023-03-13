const tabRandom = [];

function remplirRandom(tableau){
    for(index = 0; index < 10; index++){
        tableau.push(Math.floor(Math.random()* 10) + 1);
    }

    return tableau
}

remplirRandom(tabRandom);

console.log("Nombres dans la liste :", tabRandom);
console.log("Min =", Math.min(...tabRandom), "Max =", Math.max(...tabRandom));
