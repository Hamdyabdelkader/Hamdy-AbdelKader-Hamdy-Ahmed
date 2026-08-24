function sayWelcome () { 
    console.log("hello!")  
}


var month = prompt("Enter a month: ");

switch(month){
    case "January":
        console.log("it is the first month of the year");
        break;
     case "February":
        console.log("it is the second month of the year");
        break;  
        default:
        console.log("it is not the first or second month of the year"); 
}

var nums = [10, 20, 30, 40, 50];
var sum = 0;
for (var num of nums) {
    sum += num;
}
var average = sum / nums.length;

console.log(average);