const userInput = "Hello World";
function noEmptyReverse(content){
    return content.split(" ").join("").split("").reverse().join("");
}
console.log(noEmptyReverse(userInput).toUpperCase());