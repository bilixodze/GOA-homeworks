// l
// ძირითადი კლასი Animal
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    speak() {
      console.log("This animal makes a sound.");
    }
  }
  
  // შვილი კლასი Dog
  class Dog extends Animal {
    speak() {
      console.log("Bark!");
    }
  }
  
  // შვილი კლასი Cat
  class Cat extends Animal {
    speak() {
      console.log("Meow!");
    }
  }
  
  // მაგალითი გამოყენების
  const myDog = new Dog('Rex', 5);
  myDog.speak(); // Output: Bark!
  
  const myCat = new Cat('Whiskers', 3);
  myCat.speak(); // Output: Meow!
//_________________________________________________________________________________________

// ll
// ძირითადი კლასი Vehicle
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    
    displayInfo() {
      console.log(`Vehicle Make: ${this.make}, Model: ${this.model}`);
    }
  }
  
  // შვილი კლასი Car
  class Car extends Vehicle {
    constructor(make, model, fuelType) {
      super(make, model); // მშობლის კონსტრუქტორის გამოძახება
      this.fuelType = fuelType;
    }
    
    displayInfo() {
      super.displayInfo(); // მშობლის მეთოდის გამოძახება
      console.log(`Fuel Type: ${this.fuelType}`);
    }
  }
  
  // მაგალითი გამოყენების
  const myCar = new Car('Toyota', 'Corolla', 'Petrol');
  myCar.displayInfo();
  // Output:
  // Vehicle Make: Toyota, Model: Corolla
  // Fuel Type: Petrol
//___________________________________________________________________________________________________

// lll
// ძირითადი კლასი Shape
class Shape {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }
  }
  
  // შვილი კლასი Triangle
  class Triangle extends Shape {
    constructor(base, height) {
      super('Triangle', 3); // მშობლის კონსტრუქტორის გამოძახება
      this.base = base;
      this.height = height;
    }
    
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  // მაგალითი გამოყენების
  const myTriangle = new Triangle(10, 5);
  console.log(`Area of the triangle: ${myTriangle.calculateArea()}`); 
  // Output: Area of the triangle: 25
//__________________________________________________________________________________________________

/// lV
// ძირითადი კლასი Appliance
class Appliance {
    constructor(brand, power) {
      this.brand = brand;
      this.power = power;
    }
    
    turnOn() {
      console.log("The appliance is now on.");
    }
  }
  
  // შვილი კლასი WashingMachine
  class WashingMachine extends Appliance {
    washClothes() {
      this.turnOn(); // მშობლის მეთოდის გამოძახება
      console.log("Washing clothes...");
    }
  }
  
  // შვილი კლასი Microwave
  class Microwave extends Appliance {
    heatFood() {
      this.turnOn(); // მშობლის მეთოდის გამოძახება
      console.log("Heating food...");
    }
  }
  
  // მაგალითი გამოყენების
  const myWasher = new WashingMachine('LG', '1500W');
  myWasher.washClothes();
  // Output:
  // The appliance is now on.
  // Washing clothes...
  
  const myMicrowave = new Microwave('Samsung', '800W');
  myMicrowave.heatFood();
  // Output:
  // The appliance is now on.
  // Heating food...
//_____________________________________________________________________________________________  