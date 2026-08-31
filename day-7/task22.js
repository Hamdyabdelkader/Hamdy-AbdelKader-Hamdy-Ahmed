function sumAll(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumAll(1,2,3));//6
console.log(sumAll(10,20,30,40));//100