// Syntax for an object is curly braces, objects can hold all types variables, float, functions, integer etc.
// This only has one instance, this is not reusable
var person = {
  name: "Jack",
  age: 23,
  speakName: function(aName) {
    return "Hello, " + aName;
  }
};


// Select property from the object
console.log(person.name);

console.log(person.speakName("Harry")); // Pass in the name "Harry"

console.log("Name: " + person["name"]); // You can access properties of an object by using brackets

// Modify properties of an object
person.age += 5;
console.log("Age: " + person.age);

// Create a function object
var Vehicle  = function(make, color, premium) {
  var self = this; // When working with function objects reference self
  this.make = make; // Creating global variable, making it publically accessible with the this keyword
  this.odometer = 0;
  this.engine = "V6";
  this.color = color;

  if (premium == true) {
    this.engine = "V8";
    this.color = "Platinum"
  }

  // Create a function inside of vehicle function
  this.addTrip = function(newMiles) {
    if (newMiles > 0) {
      self.odometer += newMiles; // Add the new miles
    }
  };

};

// Create a new vehicle and assign name, color and wether its premium
var benz = new Vehicle("Mercedez-Benz", "White", false);

console.log("Color:" + benz.color);
console.log("Odometer: " + benz.odometer);

benz.addTrip(501); // Add trip to the car
console.log("Odometer: " + benz.odometer);

benz.addTrip(-500); // Attempt negative miles, should not accept this
console.log("Odometer: " + benz.odometer);

// Pass in the premium package for Volvo
var volvo = new Vehicle("Volvo", "Maroon", true);

console.log("Volvo Color: " + volvo.color);
console.log("Color bracket syntax: " + volvo["color"]);
