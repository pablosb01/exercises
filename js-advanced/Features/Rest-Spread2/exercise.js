function sum(...num) {
    return num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));