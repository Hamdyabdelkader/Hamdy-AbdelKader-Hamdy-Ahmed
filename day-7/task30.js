const APP_CONFIG = {name: "V",version: "1.0",api: {baseUrl: "https://Hamdy.com",timeout: 500},features: []};

APP_CONFIG.api.timeout = 1000;//valid
APP_CONFIG.features.push("Dark Mode");//valid
console.log(APP_CONFIG);//{name: "V",version: "1.0",api: {baseUrl: "https://Hamdy.com",timeout: 1000},features: ["Dark Mode"]}

try {
    APP_CONFIG = {};//unvalid bec. of const
} catch (error) {
    console.log("Error: Cannot reassign a const variable");
}