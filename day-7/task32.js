const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}

// Omar scored 80
// Mona scored 90
// Ali scored 70