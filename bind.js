// Alex Brown's
this.car = "Honda Civic w/ Ugly Spoiler";

var marksGarage = {
  car: "Aston Martin",
  getCar: function() {
    return this.car;
  }
}

console.log(marksGarage.getCar()); // Returns Aston Martin

// Get the car later
var storeGetCarForLater = marksGarage.getCar;

// Now work is over and Mark wants his car

console.log(storeGetCarForLater()); // We lost the scope of the object we wanted

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage); // Call the bind function and pass marksGarage (object). Bind allows your to define what 'this' is.
console.log(theRealGetCarFunction()); // Prints the correct result
