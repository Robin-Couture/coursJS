loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt pretium tortor, a cursus orci vestibulum eget. Cras nisl magna, gravida ac posuere ut, feugiat quis lacus. Cras ultricies interdum lacus, in accumsan magna pharetra sed. Integer congue, lacus nec ultrices semper, ex enim suscipit est, sit amet blandit elit lacus id metus. Ut feugiat dui sed felis porta iaculis. In sagittis ac tortor nec ultricies. Morbi condimentum elementum cursus. Quisque id justo sollicitudin, viverra dui eget, efficitur nibh. Etiam eu auctor odio. In hac habitasse platea dictumst. Integer tristique vestibulum lorem at sollicitudin. Quisque purus ante, ultrices id ullamcorper sit amet, luctus a risus. Nunc ut mattis turpis. Donec sit amet ultrices dui. Fusce lacinia euismod convallis. Donec nec mauris at erat vehicula pharetra vel et ante.';

function compteurVoyelle(texte){
    let compteur = 0;
    for(index = 0; index < loremIpsum.length; index++){
        if(
        texte[index] == 'a' || texte[index] == 'A' ||
        texte[index] == 'e' || texte[index] == 'E' ||
        texte[index] == 'i' || texte[index] == 'I' ||
        texte[index] == 'o' || texte[index] == 'O' ||
        texte[index] == 'u' || texte[index] == 'U' ||
        texte[index] == 'y' || texte[index] == 'Y'
        ){
            compteur = compteur + 1;
        }
    }

    return compteur;
}

function countVowel(texte){
    return texte.match(/[aeiouy]/gi || []).length;
}

console.log("Nombre de voyelle dans le texte:", compteurVoyelle(loremIpsum));
console.log(countVowel(loremIpsum));