// l. Library Class with Map
class Library {
    constructor() {
      this.books = new Map();
    }
  
    addBook(title, author) {
      this.books.set(title, author);
    }
  }
  //_____________________________________________________________________________________________________________________________
  
  // ll. Store Class with Map as a property
  class Store {
    constructor() {
      this.products = new Map();
    }
  
    addProduct(product, price) {
      this.products.set(product, price);
    }
  
    getPrice(product) {
      return this.products.get(product) || 'Product not found';
    }
  }
  //____________________________________________________________________________________________________________________________
  
  // lll. PhoneBook Class with Map and methods
  class PhoneBook {
    constructor() {
      this.contacts = new Map();
    }
  
    addContact(name, phone) {
      this.contacts.set(phone, name);
    }
  
    getContact(phone) {
      return this.contacts.get(phone) || 'Contact not found';
    }
  }
  //___________________________________________________________________________________________________________________________
  
  // lV. Zoo Class with Map and listAnimals method
  class Zoo {
    constructor() {
      this.animals = new Map();
    }
  
    addAnimal(name, count) {
      this.animals.set(name, count);
    }
  
    listAnimals() {
      return Array.from(this.animals.entries());
    }
  }
  //___________________________________________________________________________________________________________________________
  
  // V. Inheritance with Map - Inventory and StoreInventory
  class Inventory {
    constructor() {
      this.items = new Map();
    }
  
    addItem(item, quantity) {
      this.items.set(item, quantity);
    }
  }
  
  class StoreInventory extends Inventory {
    getStock(item) {
      return this.items.get(item) || 'Item not found';
    }
  }
//_____________________________________________________________________________________________________________________________
  
  // Vl. Classroom Class with Map and average score calculation
  class Classroom {
    constructor() {
      this.students = new Map();
    }
  
    addStudent(id, score) {
      this.students.set(id, score);
    }
  
    getAverageScore() {
      let totalScore = 0;
      for (let score of this.students.values()) {
        totalScore += score;
      }
      return this.students.size ? totalScore / this.students.size : 0;
    }
  }
//__________________________________________________________________________________________________________________________
  
  // Vll. CountryDirectory Class with Map initialization in the constructor
  class CountryDirectory {
    constructor(countries) {
      this.countries = new Map(countries);
    }
  
    getCapital(country) {
      return this.countries.get(country) || 'Country not found';
    }
  }
  //_______________________________________________________________________________________________________________________
  
  // Vlll. ShoppingCart Class with Map and interactive methods
  class ShoppingCart {
    constructor() {
      this.cart = new Map();
    }
  
    addItem(product, quantity) {
      if (this.cart.has(product)) {
        this.cart.set(product, this.cart.get(product) + quantity);
      } else {
        this.cart.set(product, quantity);
      }
    }
  
    getTotalItems() {
      let total = 0;
      for (let quantity of this.cart.values()) {
        total += quantity;
      }
      return total;
    }
  }
  //_______________________________________________________________________________________________________________
  
  // lX. RestaurantMenu Class with Map initialization in the constructor
  class RestaurantMenu {
    constructor(menu) {
      this.menu = new Map(menu);
    }
  
    getItemPrice(item) {
      return this.menu.get(item) || 'Item not found';
    }
  }
  //________________________________________________________________________________________________________________
  
  // X. StudentGrades Class with Map and getTopStudent method
  class StudentGrades {
    constructor(grades) {
      this.grades = new Map(grades);
    }
  
    getTopStudent() {
      let topStudent = null;
      let highestGrade = -Infinity;
  
      for (let [name, grade] of this.grades.entries()) {
        if (grade > highestGrade) {
          highestGrade = grade;
          topStudent = name;
        }
      }
  
      return topStudent || 'No students found';
    }
  }
  
  // მაგალითების გამოყენება
  
  // Library example
  const myLibrary = new Library();
  myLibrary.addBook('1984', 'George Orwell');
  console.log(myLibrary.books); // Map(1) { '1984' => 'George Orwell' }
  
  // Store example
  const myStore = new Store();
  myStore.addProduct('Apple', 0.5);
  console.log(myStore.getPrice('Apple')); // 0.5
  
  // PhoneBook example
  const myPhoneBook = new PhoneBook();
  myPhoneBook.addContact('John Doe', '123456789');
  console.log(myPhoneBook.getContact('123456789')); // John Doe
  
  // Zoo example
  const myZoo = new Zoo();
  myZoo.addAnimal('Lion', 5);
  console.log(myZoo.listAnimals()); // [ [ 'Lion', 5 ] ]
  
  // StoreInventory example
  const myInventory = new StoreInventory();
  myInventory.addItem('Laptop', 10);
  console.log(myInventory.getStock('Laptop')); // 10
  
  // Classroom example
  const myClassroom = new Classroom();
  myClassroom.addStudent(1, 85);
  myClassroom.addStudent(2, 90);
  console.log(myClassroom.getAverageScore()); // 87.5
  
  // CountryDirectory example
  const countries = [['Georgia', 'Tbilisi'], ['France', 'Paris']];
  const myDirectory = new CountryDirectory(countries);
  console.log(myDirectory.getCapital('Georgia')); // Tbilisi
  
  // ShoppingCart example
  const myCart = new ShoppingCart();
  myCart.addItem('Banana', 2);
  myCart.addItem('Banana', 3);
  console.log(myCart.getTotalItems()); // 5
  
  // RestaurantMenu example
  const menu = [['Pizza', 8.99], ['Burger', 5.49]];
  const myMenu = new RestaurantMenu(menu);
  console.log(myMenu.getItemPrice('Pizza')); // 8.99
  
  // StudentGrades example
  const grades = [['Alice', 95], ['Bob', 89]];
  const myGrades = new StudentGrades(grades);
  console.log(myGrades.getTopStudent()); // Alice
//____________________________________________________________________________________________  