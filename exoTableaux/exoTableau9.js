const tabRandom = [];

for(index = 0; index < 10; index++){
    tabRandom.push(Math.floor(Math.random() * 10));
}

min = Math.min(...tabRandom);
max = Math.max(...tabRandom);

console.log("Nombres dans la liste :", tabRandom);
console.log("Min =", min, "Max =", max);
