var languages = ["js", "html", "css", "js", "react", "js"];
var count = languages.filter(function(language) {
    return language == "js";
});
console.log(count.length);