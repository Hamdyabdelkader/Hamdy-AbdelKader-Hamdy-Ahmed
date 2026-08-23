var hotelName= window.prompt("Enter your hotel name");
var nights= window.prompt("Enter number of nights");
var confirm=window.confirm ("Do you confirm your booking?");
var message = `Hotel: ${hotelName}, Nights: ${nights}, Confirmed: ${confirm}`;
window.alert(message);
console.log(message);