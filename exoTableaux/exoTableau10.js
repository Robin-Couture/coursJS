const tabBlaBla = [
"J’bois d’la limonade de chatte (ouais)", 
"Les anges muets ont un cri", 
"Glock, tchoin, boko, bédo", 
"AHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH"];

let taille = 0;
let indexRetenu;

for(index = 0; index < tabBlaBla.length; index++){
    if(tabBlaBla[index].length > taille){
        taille = tabBlaBla[index].length;
        indexRetenu = index;
    }
}

console.log("La phrase la plus longue est la", indexRetenu+1,"ème, celle qui dit :", tabBlaBla[indexRetenu]);
