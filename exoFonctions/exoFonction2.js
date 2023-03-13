const tab = [1, 3, 5, 8, 7, 4 , 9, 2, 3, 6, 4, 7,156156]

function MaximumTab(tableau) {
    let max = Math.max(...tableau);
    return max;
}

console.log(MaximumTab(tab));