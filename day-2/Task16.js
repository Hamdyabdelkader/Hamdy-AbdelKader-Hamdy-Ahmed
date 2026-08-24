var day = prompt("Enter day:");

switch (day) {
    
    case "Saturday":
        console.log("Start of the weekend");
        break;

    case "Sunday":
        console.log("Weekend");
        break;

    case "Monday":
        console.log("it is midWeek");
        break;

    case "Friday":
        console.log("it is end of the week");
        break;

    default:
        console.log("normal day");
}