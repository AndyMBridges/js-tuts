console.log(true === false);
console.log(true === true);

var amICool = true;

if (amICool) {
    console.log("This had better print!");
}

if (true === true) {
    console.log(" This is true");
} else if (true != true) {
    console.log("Should not see this");
} else {
    console.log("Why would we ever get here?");
}

var val1 = 6; // Integer
var val2 = "6"; // String


// Never do double equals (Only checks type)
if (val1 == val2) {
    console.log("Say whaaaaat?!");
}

// Always use triple equals (Means we can checking for type, number and value)
if (val1 === val2) {
    console.log("We should not see this!");
} else {
    console.log("Always use strict equality!");
}
