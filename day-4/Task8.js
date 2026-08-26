var settings = {
    theme: "dark",
    lang: "en"
};
Object.freeze(settings);//freeze = مينفعش امسح او اعدل او ازد علي ال object
settings.theme = "light";
settings.fontSize = 16;
console.log(settings);// {theme: "dark", lang: "en"}