var yo = "Hello, World!!"; // String literal

console.log(yo); // Print variable
console.log("Length: " + yo.length); // Get string length
console.log("Index 4: " + yo[4]); // Access like an array

// Loop through variable
for (var x = 0; x < yo.length; x++ ) {
    console.log("Char: " + yo[x]);
}

var words = "John" + " Jacob" + " Jingle" + " Heimer" + " Smith";

console.log(words);

var aNumber = 6;
var str6 = "6";

console.log(str6 + 6);
// Adding a number to string correctly
console.log(parseInt(str6) + 6);
