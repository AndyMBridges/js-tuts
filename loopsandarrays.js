// Name Array
var name = ['Jon', 'Jacob', 'Jingle', 'Heimer'];

// Loop through each name
for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

// Add Tom to the list
name.push("Tom");

// List array with Tom added
for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

// Bad practice to have arrays with different types
var whatever = ['Jeremy', true, 312];

// List array with whatever array added
for (var x = 0; x < whatever.length; x++) {
    console.log(whatever[x]);
}

// While Loop
var i = 0;
while (i < 10) {
    console.log("Iteration: " + i)
    i++;
}

// Do while loop
i = 0;
do {
    console.log("Iteration: " + i)
    i++;
}
while (i < 10);

// Cut element from array using splice
whatever.splice(0,1) // Start at 0 and remove 1 element
console.log(whatever);
