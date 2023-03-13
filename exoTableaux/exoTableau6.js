//Il faut appeler le .js avec le nom de l'oiseau qu'on cherche à côté (ex : exoTableau6.js Hirondelle)



const Oiseaux = ["Hirondelle", "Peroquet", "Pigeon"];

//const { argv } = require("process");
//let recherche = argv[2];

// if(Oiseaux.indexOf(recherche) !== -1){
//     console.log("Votre oiseau est bien dans la liste");
// } else{
//     console.log("Votre oiseau n'est pas dans la liste");
// }

function cherchePiaf(volatile){
    if(Oiseaux.indexOf(volatile) !== -1){
        return console.log("Votre oiseau est bien dans la liste");
    } else{
        return console.log("Votre oiseau n'est pas dans la liste");
    }


}

cherchePiaf("Hirondelle");