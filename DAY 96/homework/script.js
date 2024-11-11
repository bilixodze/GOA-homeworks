// 1. Create an Object

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log(person);
  
  // 2. Access Object Properties
  console.log(person.name);
  console.log(person.city);
  
  // 3. Destructuring an Object
  const { name, age } = person;
  console.log(name);
  console.log(age);
  
  // 4. Nested Object Destructuring
  const student = {
    name: "Alice",
    age: 22,
    address: {
      city: "Los Angeles",
      country: "USA"
    }
  };
  const { address: { city, country } } = student;
  console.log(city);
  console.log(country);
  
  // 5. Default Values in Destructuring
  const product = {
    name: "Laptop",
    price: 1200
  };
  const { name: productName, category = "general" } = product;
  console.log(productName);
  console.log(category);
  
  // 6. Destructure from Function Parameters
  function displayCar({ brand, model, year }) {
    console.log(`Brand: ${brand}`);
    console.log(`Model: ${model}`);
    console.log(`Year: ${year}`);
  }
  displayCar({ brand: "Toyota", model: "Corolla", year: 2020 });
  
  // 7. Rest Operator with Objects
  const book = {
    title: "JavaScript Guide",
    author: "MDN",
    year: 2021,
    publisher: "Mozilla"
  };
  const { title, author, ...details } = book;
  console.log(title);
  console.log(author);
  console.log(details);
  
  // 8. Spread Operator with Objects
  const user = { name: "Emma", age: 28 };
  const location = { city: "Paris", country: "France" };
  const mergedObject = { ...user, ...location };
  console.log(mergedObject);
  
  // 9. Rest Operator with Function Arguments
  function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sumNumbers(1, 2, 3, 4, 5));
  
  // 10. Spread Operator with Arrays
  const numbers1 = [1, 2, 3];
  const numbers2 = [4, 5, 6];
  const combinedNumbers = [...numbers1, ...numbers2];
  console.log(combinedNumbers);
  