// // Add your Circle class here
// Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
// Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly
// For reference, here are the formulas for calculating diameter, circumference and area:

// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2

const pi = Math.PI;
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.diameter * pi;
  }

  get area() {
    return Math.pow(this.radius, 2) * pi;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / pi / 2;
  }

  set area(area) {
    this.radius = Math.sqrt(area) / pi;
  }
}
