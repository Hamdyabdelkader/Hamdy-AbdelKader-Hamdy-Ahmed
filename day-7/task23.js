const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const merged = [...arr1, ...arr2];
console.log(merged);//[1,2,3,4,5]

const original = [10, 20, 30];
const copy = [...original];
copy.push(40);
console.log(original);//[10, 20, 30]
console.log(copy);//[10, 20, 30, 40]