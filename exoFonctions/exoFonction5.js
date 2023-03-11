let monNombre = 131;

function aidePourCheque(nombre) {    
    let nombreTxt = nombre.toString();
    let nombreTxtFinal;

    if (nombreTxt.length > 6){
        return 'Dépassement de capacité';
    }

    let unité = '';
    switch(nombreTxt[nombreTxt.length-1]) {
        case '0' : unité = ''; break;
        case '1' : unité = 'un'; break;
        case '2' : unité = 'deux'; break;
        case '3' : unité = 'trois'; break;
        case '4' : unité = 'quatre'; break;
        case '5' : unité = 'cinq'; break;
        case '6' : unité = 'six'; break;
        case '7' : unité = 'sept'; break;
        case '8' : unité = 'huit'; break;
        case '9' : unité = 'neuf'; break;
    }

    let dizaine = '';
    switch(nombreTxt[nombreTxt.length-2]) {
        case '0' : dizaine = ''; break;
        case '1' : dizaine = 'dix '; break;
        case '2' : dizaine = 'vingt '; break;
        case '3' : dizaine = 'trente '; break;
        case '4' : dizaine = 'quarante '; break;
        case '5' : dizaine = 'cinquante '; break;
        case '6' : dizaine = 'soixante '; break;
        case '7' : dizaine = 'soixante dix '; break;
        case '8' : dizaine = 'quatre vingt '; break;
        case '9' : dizaine = 'quatre vingt dix '; break;
    }

    if(dizaine !== '' && unité === 'un'){
        unité = 'et un';
    }

    nombreTxtFinal = dizaine + unité;

    switch(nombreTxtFinal){
        case 'dix et un' : nombreTxt = 'onze'; break;
        case 'dix deux' : nombreTxt = 'douze'; break;
        case 'dix trois' : nombreTxt = 'treize'; break;
        case 'dix quatre' : nombreTxt = 'quatorze'; break;
        case 'dix cinq' : nombreTxt = 'quinze'; break;
        case 'dix six' : nombreTxt = 'seize'; break;
    }

    let centaine = '';
    switch(nombreTxt[nombreTxt.length - 3]){
        case '0' : centaine = ''; break;
        case '1' : centaine = 'cent'; break;
        case '2' : centaine = 'deux cent '; break;
        case '3' : centaine = 'trois cent '; break;
        case '4' : centaine = 'quatre cent '; break;
        case '5' : centaine = 'cinq cent '; break;
        case '6' : centaine = 'six cent '; break;
        case '7' : centaine = 'sept cent '; break;
        case '8' : centaine = 'huit cent '; break;
        case '9' : centaine = 'neuf cent '; break;
    }

    if(centaine !== '' && dizaine === '' && unité === ''){
        centaine = centaine + 's';
    } else {
        centaine = centaine + ' ';
    }

    nombreTxtFinal = centaine + nombreTxtFinal;

    return nombreTxtFinal;
}


console.log(aidePourCheque(monNombre));