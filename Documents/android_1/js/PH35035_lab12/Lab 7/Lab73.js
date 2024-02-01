// Lớp cơ sở Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Lớp con ElectricCar kế thừa từ Car
  function ElectricCar(make, speed, charge) {
    // Gọi constructor của lớp cơ sở bằng cách sử dụng apply
    Car.apply(this, [make, speed]);
    this.charge = charge;
  }
  
  // Kế thừa prototype của Car cho ElectricCar
  ElectricCar.prototype = Object.create(Car.prototype);
  
  // Khởi tạo phương thức 'chargeBattery' cho ElectricCar
  ElectricCar.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
  };
  
  // Ghi đè phương thức 'accelerate' của Car cho ElectricCar
  ElectricCar.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // Khởi tạo đối tượng ElectricCar và thực hiện các phương thức
  const tesla = new ElectricCar("Tesla", 120, 23);
  console.log(`Car 1: ${tesla.make} is moving at ${tesla.speed} km/h with a charge of ${tesla.charge}%`);
  
  // Thực hiện phương thức accelerate
  tesla.accelerate();
  
  // Thực hiện phương thức brake (lấy từ Car)
  ElectricCar.prototype.brake = function() {
    this.speed -= 10;
    console.log(`${this.make} braked. New speed: ${this.speed} km/h`);
  };
  
  // Thực hiện phương thức chargeBattery
  tesla.chargeBattery(90);
  