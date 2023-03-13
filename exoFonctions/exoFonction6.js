const tab = [
   {age : 87, prenom : "Jean"},
   {age : 23, prenom : "Eric"},
   {age : 54, prenom : "Samuel"},
   {age : 45, prenom : "Michel"},
]

function afficherInfo(tableau, clé){
    let tabSortie = [];
    for(index = 0; index < tableau.length; index++){
        for (const key in tableau[index]) {
            const element = key;
            if(element === clé){
                tabSortie[index] = tableau[index][key];
            }
        }
    }

    console.log(tabSortie);
    return tabSortie;
}

afficherInfo(tab, 'prenom');