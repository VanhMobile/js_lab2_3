// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  
    // Method to accelerate
    this.accelerate = function() {
      this.speed += 10;
      console.log(`${this.make} accelerated. New speed: ${this.speed} km/h`);
    };
  
    // Method to brake
    this.brake = function() {
      this.speed -= 5;
      console.log(`${this.make} braked. New speed: ${this.speed} km/h`);
    };
  }
  
  // Test cases
  const bmw = new Car("BMW", 120);
  const mercedes = new Car("Mercedes", 95);
  
  // Test accelerate and brake methods on Car 1 (BMW)
  console.log(`Car 1: ${bmw.make} is running at ${bmw.speed} km/h`);
  bmw.accelerate(); // Accelerate BMW
  bmw.brake();      // Brake BMW
  
  // Test accelerate and brake methods on Car 2 (Mercedes)
  console.log(`Car 2: ${mercedes.make} is running at ${mercedes.speed} km/h`);
  mercedes.accelerate(); // Accelerate Mercedes
  mercedes.brake();      // Brake Mercedes
  