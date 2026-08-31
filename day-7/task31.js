function createCard(title, price = 0, ...tags) {
    return {title: title,price: price,tags: tags, label: `${title} - ${price} EGP`};
}

const card1 = createCard("Laptop", 15000, "Dell", "Electronics");
const card2 = createCard("Mouse", 500, "Gaming", "Wireless");

console.log(card1);
console.log(card2);