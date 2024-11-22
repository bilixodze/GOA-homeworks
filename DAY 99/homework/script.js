// l 
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }
  
  // Creating an instance of the Car class
  const myCar = new Car('Toyota', 'Corolla');
  console.log(myCar.make);  // Output: Toyota
  console.log(myCar.model); // Output: Corolla
//_________________________________________________________________

// ll
class BankAccount {
    #balance;  // Private property
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn: ${amount}. New Balance: ${this.#balance}`);
      } else {
        console.log('Insufficient balance.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Usage
  const myAccount = new BankAccount(1000);
  myAccount.deposit(500);   // Deposited: 500. New Balance: 1500
  myAccount.withdraw(300);  // Withdrawn: 300. New Balance: 1200
  console.log(myAccount.getBalance()); // Output: 1200
//_____________________________________________________________________________________________

// lll
class MathOperations {
    static PI = 3.14159;
  
    static add(a, b) {
      return a + b;
    }
  }
  
  // Usage
  console.log(MathOperations.PI);          // Output: 3.14159
  console.log(MathOperations.add(5, 7));   // Output: 12
//____________________________________________________________________________________________

// lV
class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    get area() {
      return this._width * this._height;
    }
  
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.log('Width must be positive');
      }
    }
  
    set height(value) {
      if (value > 0) {
        this._height = value;
      } else {
        console.log('Height must be positive');
      }
    }
  }
  
  // Usage
  const myRectangle = new Rectangle(5, 10);
  console.log(myRectangle.area);  // Output: 50
  myRectangle.width = 8;          // Changing width
  console.log(myRectangle.area);  // Output: 80
  myRectangle.height = -5;        // Output: Height must be positive
//___________________________________________________________________________________________

// V
class User {
    #password;
  
    constructor(username, password) {
      this.username = username;
      this.#setPassword(password);
    }
  
    #validatePassword(password) {
      return password.length >= 8;
    }
  
    #setPassword(password) {
      if (this.#validatePassword(password)) {
        this.#password = password;
        console.log('Password set successfully');
      } else {
        console.log('Password must be at least 8 characters long');
      }
    }
  }
  
  // Usage
  const user1 = new User('john_doe', 'securePass'); // Password set successfully
  const user2 = new User('jane_doe', 'short');      // Password must be at least 8 characters long
//_____________________________________________________________________________________________________

// Vl
class Book {
    constructor(title, pages) {
      this.title = title;
      this._pages = pages;
    }
  
    get pages() {
      return this._pages;
    }
  
    set pages(newPageCount) {
      if (newPageCount > 0) {
        this._pages = newPageCount;
      } else {
        console.log('Page count must be positive');
      }
    }
  }
  
  // Usage
  const myBook = new Book('JavaScript Guide', 200);
  console.log(myBook.pages); // Output: 200
  myBook.pages = 300;        // Updating pages
  console.log(myBook.pages); // Output: 300
//____________________________________________________________________________________________________

// Vll
class Player {
    static playerCount = 0;
  
    constructor(name) {
      this.name = name;
      Player.playerCount++;
    }
  
    static getPlayerCount() {
      return Player.playerCount;
    }
  }
  
  // Usage
  const player1 = new Player('Alice');
  const player2 = new Player('Bob');
  console.log(Player.getPlayerCount()); // Output: 2
//____________________________________________________________________________________________________

// Vlll
class Vehicle {
    #speed = 0;  // Private property
  
    accelerate(amount) {
      if (amount > 0) {
        this.#speed += amount;
        console.log(`Accelerated to ${this.#speed} km/h`);
      }
    }
  
    getSpeed() {
      return this.#speed;
    }
  }
  
  class Bike extends Vehicle {
    increaseSpeed(amount) {
      this.accelerate(amount);
    }
  }
  
  // Usage
  const myBike = new Bike();
  myBike.increaseSpeed(20);        // Accelerated to 20 km/h
  console.log(myBike.getSpeed());  // Output: 20
//__________________________________________________________________________________________________

// lX
class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    static compareGrades(student1, student2) {
      if (student1.grade > student2.grade) {
        return `${student1.name} has a higher grade.`;
      } else if (student1.grade < student2.grade) {
        return `${student2.name} has a higher grade.`;
      } else {
        return `Both have the same grade.`;
      }
    }
  }
  
  // Usage
  const student1 = new Student('John', 85);
  const student2 = new Student('Jane', 92);
  console.log(Student.compareGrades(student1, student2)); // Output: Jane has a higher grade.
//________________________________________________________________________________________________  