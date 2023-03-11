tab = [1,5,45,67,12,611,6146,1,36846,116984,6416,1168461,24];

function triDecroissantNombre(tableau) {
    tableau.sort((a, b) => b - a);

    return tableau;
}

console.log(triDecroissantNombre(tab));