let citationRoiHeenok = "ils tirent aucun revenu... ou est l'hydroponique ?"

function voyelleMaj(texte){
    let texte2 = [];
    for(index = 0; index < texte.length; index++){
        if(texte[index] == 'a' || texte[index] == 'e' || texte[index] == 'i' || 
        texte[index] == 'o' || texte[index] == 'u' || texte[index] == 'y'){
            texte2.push(texte[index]);
        } else {
            texte2.push(texte[index].toUpperCase());            
        }
    }

    texte2 = texte2.join('');
    return texte2;
}

console.log(voyelleMaj(citationRoiHeenok));