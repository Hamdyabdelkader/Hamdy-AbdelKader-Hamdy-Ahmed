let person1 = {name: "Ali",child: {age: 5}};
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);//Omar bec. both are mark the same location in memory