const handlers = {};
for (var i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}

console.log(handlers.fn0());//index: 3
console.log(handlers.fn2());//index: 3

//var is functionscoped all functions wil use the same i.