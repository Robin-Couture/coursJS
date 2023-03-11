//Il faut appeler le .js avec le nom de l'oiseau qu'on cherche à côté (ex : exoTableau6.js Hirondelle)

const { argv } = require("process")

const Oiseaux = ["Hirondelle", "Peroquet", "Pigeon"]
let recherche = argv[2]

if(Oiseaux.indexOf(recherche) !== -1){
    console.log("Votre oiseau est bien dans la liste")
} else{
    console.log("Votre oiseau n'est pas dans la liste")
}