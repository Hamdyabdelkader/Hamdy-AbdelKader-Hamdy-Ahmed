const user = {name: "Sara",age: 22};

const contact = {email: "sara@nti.com",age: 23};

const mergedUser = {...user,...contact};

console.log(mergedUser);// {name: "Sara",age: 23,email: "sara@nti.com"} 23wins bec. it's the last add value {...user, (then) ...cntact}