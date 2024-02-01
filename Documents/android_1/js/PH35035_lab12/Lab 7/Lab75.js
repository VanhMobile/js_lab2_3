// Lớp cơ sở CarCl
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Phương thức brake
    brake() {
      this.speed -= 10;
      console.log(`${this.make} braked. New speed: ${this.speed} km/h`);
    }
  }
  
  // Lớp con ElectricCarCl kế thừa từ CarCl
  class ElectricCarCl extends CarCl {
    #charge; // Thuộc tính private
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    // Phương thức accelerate
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }
  
    // Phương thức chargeBattery
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make} battery charged to ${this.#charge}%`);
    }
  }
  
  // Khởi tạo đối tượng ElectricCarCl và thực hiện các phương thức
  const rivian = new ElectricCarCl("Rivian", 120, 23);
  console.log(`Car 1: ${rivian.make} is moving at ${rivian.speed} km/h with a charge of ${rivian.#charge}%`);
  
  // Thực hiện phương thức accelerate
  rivian.accelerate();
  
  // Thực hiện phương thức brake (được kế thừa từ CarCl)
  rivian.brake();
  
  // Thực hiện phương thức chargeBattery
  rivian.chargeBattery(90);
  