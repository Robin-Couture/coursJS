const tab = ["bonjour", "salut", "yo", "bienvenue", "aurevoir", "bye"];

function supprVoyelle(tableau){    
    const tab2 = [];

    for(index = 0; index < tableau.length; index++){
        tab2.push(tableau[index].split("a").join("").split("e").join("").split("i").join("").split("o").join("").split("u").join("").split("y").join("")); 
    }
    return tab2;
}

function removeVowels(texte){
    return console.log(texte.replace(/[aeiouy]/gi, ''));
}

console.log(supprVoyelle(tab));
removeVowels("Bonjour");