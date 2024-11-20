/* 
-===OOP==-
POLYMORPHISM
ENCAPSULATION
ABSTRACTION
INHERITANCE
*/

// // Factory Functions
// function createCircle(radius) {
//   return {
//     radius: radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(1);

// Constructor Function
// function Circle(radius) {
//   //   console.log("this", this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const Circle1 = new Function(
//   "radius",
//   `
//     this.radius = radius;
//     this.draw = function () {
//     console.log("draw");
//   };
//     `
// );

// const circle = new Circle1(1);

// creating object like new
// Circle.call({}, 1);
// Circle.apply({}, [1,2,3]);

// const another = new Circle(1);

/* let x = {};
// let x = new Object();

new String(); // ''  , "" , ``
new Boolean(); // true , false
new Number(); // 1, 2 ,3 */

/* Primitives are copied by their value Objects are copied by their reference */

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// PRIMITIVES
// let number = 10;
// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number);

// REFERENCE
// let obj = { value: 10 };

// function increase(obj) {
//   obj.value++;
// }

// increase(obj);
// console.log(obj);

//  =============

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// circle.location = { x: 1 };
// const propertyName = "location";
// circle["location"] = { x: 1 };

// ===========

//  Looping
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// for (let key in circle) {
//   console.log(key, circle[key]);
// }

// ==============

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     // computeOptimumLocation(0.1);
//     // defaultLocation
//     // this.radius
//     console.log("draw");
//   };

//   //   Getter and Setter
//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error("Invalid Location");
//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultLocation = { x: 1, y: 1 };
// circle.draw();

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("stopwatch already running");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("stopwatch already stopped");
    running = false;

    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;

    console.log("The timer has been reset");
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
