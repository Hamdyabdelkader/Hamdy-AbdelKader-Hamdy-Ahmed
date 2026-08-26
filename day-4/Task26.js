var students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
var passedStudents = students.filter(function(student) {
    return student.grade >= 80;
});
var studentNames = passedStudents.map(function(student) {
    return student.name;
});
console.log(studentNames);