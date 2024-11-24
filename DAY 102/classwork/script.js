// l
// Step 1: Create the Map and add strings
let stringLengthMap = new Map();
stringLengthMap.set("apple", "apple".length); // 5
stringLengthMap.set("banana", "banana".length); // 6
stringLengthMap.set("cherry", "cherry".length); // 6
stringLengthMap.set("date", "date".length); // 4

// Step 2: Create a Set to hold unique lengths
let uniqueLengths = new Set(stringLengthMap.values());

// Step 3: Sum the unique lengths
let uniqueSum = Array.from(uniqueLengths).reduce((sum, length) => sum + length, 0);

console.log(uniqueSum); // Output: 15 (4 + 5 + 6)
//___________________________________________________________________________________________________

// ll
// Step 1: Create objects
let object1 = { id: 1, name: "Alice" };
let object2 = { id: 2, name: "Bob" };
let object3 = { id: 3, name: "Charlie" };

// Step 2: Create a Map and add objects by their id
let objectMap = new Map();
objectMap.set(object1.id, object1);
objectMap.set(object2.id, object2);
objectMap.set(object3.id, object3);

console.log(objectMap.get(2)); // Output: { id: 2, name: 'Bob' }
//___________________________________________________________________________________________________

// lll
// Step 1: Create a Map with names and ages
let ageMap = new Map();
ageMap.set("Alice", 25);
ageMap.set("Bob", 30);
ageMap.set("Charlie", 22);

// Step 2: Function to check if a name exists in the Map
function checkNameInMap(name) {
  return ageMap.has(name);
}

console.log(checkNameInMap("Bob")); // Output: true
console.log(checkNameInMap("Diana")); // Output: false
//___________________________________________________________________________________________________

//lV
// Step 1: Create a Map with product prices
let productPrices = new Map();
productPrices.set("apple", 1.0);
productPrices.set("banana", 0.5);
productPrices.set("cherry", 1.5);

// Step 2: Function to increase the price of a product by 10%
function increasePrice(product) {
  if (productPrices.has(product)) {
    let newPrice = productPrices.get(product) * 1.1;
    productPrices.set(product, newPrice);
  }
}

increasePrice("apple");
console.log(productPrices.get("apple")); // Output: 1.1
//___________________________________________________________________________________________________

// V
// Step 1: Create a Map with number key-value pairs
let numberMap = new Map();
numberMap.set(1, 10);
numberMap.set(2, 15);
numberMap.set(3, 20);
numberMap.set(4, 25);

// Step 2: Function to filter only even values
function filterEvenValues(map) {
  let filteredMap = new Map();
  for (let [key, value] of map) {
    if (value % 2 === 0) {
      filteredMap.set(key, value);
    }
  }
  return filteredMap;
}

let evenValuesMap = filterEvenValues(numberMap);
console.log(evenValuesMap); // Output: Map(2) { 1 => 10, 3 => 20 }
//___________________________________________________________________________________________________