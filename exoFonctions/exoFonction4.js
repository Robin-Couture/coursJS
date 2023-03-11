const tab = ["bonjour", "salut", "yo", "bienvenue", "aurevoir", "bye"];

function triMot(tableau){
    const tab2 = [];

    for(index = 0; index < tableau.length; index++){
        let tempTab = [tableau[index].split('')];
        tab2.push(tempTab.join());
    }
    return tab2;
}

console.log(triMot(tab));

