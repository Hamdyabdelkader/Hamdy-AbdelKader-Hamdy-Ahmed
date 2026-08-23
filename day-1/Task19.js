var customerName =window.prompt("Enter customer name:");
var orderPrice = window.prompt("Enter order price:");
var confirmPaid = window.confirm("Has the payment been completed?");
var price = Number(orderPrice);
var message = "Customer: " + customerName +  ", Price: " + price +", Paid: " + confirmPaid;
console.log(message);
alert(message);
document.getElementById("result").innerText = message;