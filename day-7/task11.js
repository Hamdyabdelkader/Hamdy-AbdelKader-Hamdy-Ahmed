const student = {name: "Hamdy",age: 21,city: "Cairo"};

console.log(student);//{name: "Hamdy",age: 21,city: "Cairo"}

student.age = 99;
console.log(student);//{name: "Hamdy",age: 99,city: "Cairo"}

student.grade = "A";
console.log(student);//{name: "Hamdy",age: 21,city: "Cairo",grade: "A"}

delete student.city;
console.log(student);//{name: "Hamdy",age: 21,grade: "A"}

try {
    student = {
        name: "Ahmed",
        age: 22
    };
} catch (error) {
    console.log(error.message);//Error
}

//objets can add/change/delete it's element but can't change the all objet 