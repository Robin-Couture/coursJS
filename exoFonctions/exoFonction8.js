let citationMorsay = 'ni aigle ni pigeon je suis le pivert qui casse le cul de ta go'

function voyelleMaj(texte){
    let texte2 = [];
    for(index = 0; index < texte.length; index++){
        if(texte[index] == 'a' || texte[index] == 'e' || texte[index] == 'i' || 
        texte[index] == 'o' || texte[index] == 'u' || texte[index] == 'y'){
            texte2.push(texte[index].toUpperCase());
        } else {
            texte2.push(texte[index]);
        }
    }

    texte2 = texte2.join('');
    return texte2;
}

function capVowel(texte){
    return texte.replace(/[aeiouy]/gi, voyelle => voyelle.toUpperCase());
}

console.log(voyelleMaj(citationMorsay));
console.log(capVowel(citationMorsay));