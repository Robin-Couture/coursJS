const tab = ["bonjour", "salut", "yo", "bienvenue", "aurevoir", "bye"];

function triMot(tableau){
    const tab2 = [];

    for(index = 0; index < tableau.length; index++){
        let tabTemporaire = [tab[index].split('').sort().join('')];
        tab2.push(tabTemporaire);
    }
    return tab2;
}

console.log(triMot(tab));

