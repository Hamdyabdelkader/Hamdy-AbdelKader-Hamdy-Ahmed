var sentence = " javaScript is amazing and awesome"
var word=sentence.toLowerCase();
var count=0;
for(var i=0;i<word.length;i++){
    if(word.charAt(i)=="a"){
        count++;
    }
}
console.log(count);