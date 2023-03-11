const Notes = [12,14,15,16,18]
let calcul = 0

for(index = 0; index < Notes.length; index++){
    calcul = calcul + Notes[index]
}

console.log("moyenne des élèves :", calcul / Notes.length)
