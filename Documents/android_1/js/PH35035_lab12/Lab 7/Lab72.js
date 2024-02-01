class Car {
    constructor(make, speed) {
      this.make = make;
      this._speed = speed; // _speed để đảm bảo sử dụng setter/getter thay vì truy cập trực tiếp
    }
  
    // Phương thức tăng tốc
    accelerate() {
      this._speed += 10;
      console.log(`${this.make} accelerated. New speed: ${this._speed} km/h`);
    }
  
    // Phương thức phanh
    brake() {
      this._speed -= 5;
      console.log(`${this.make} braked. New speed: ${this._speed} km/h`);
    }
  
    // Getter speedUS
    get speedUS() {
      return this._speed / 1.6;
    }
  
    // Setter speedUS
    set speedUS(newSpeedUS) {
      this._speed = newSpeedUS * 1.6;
      console.log(`${this.make} speed set to ${newSpeedUS} mi/h. Converted to ${this._speed} km/h`);
    }
  }
  
  // Test case
  const ford = new Car("Ford", 120);
  console.log(`Car 1: ${ford.make} is moving at ${ford._speed} km/h`);
  
  // Test accelerate method
  ford.accelerate();
  
  // Test brake method
  ford.brake();
  
  // Test getter speedUS
  console.log(`Speed in mi/h: ${ford.speedUS} mi/h`);
  
  // Test setter speedUS
  ford.speedUS = 75;
  