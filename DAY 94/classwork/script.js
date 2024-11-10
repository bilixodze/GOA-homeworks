// თავდაპირველი მასივი
const names = ["ანა", "ბექა", "გიორგი", "მარიამი", "ნიკა"];

// map მეთოდის გამოყენება
const modifiedNames = names.map((name, index) => {
  if (index % 2 === 0) {
    return name.toUpperCase(); // ლუწი ინდექსებისთვის დიდ ასოებად
  } else {
    return name.toLowerCase(); // კენტი ინდექსებისთვის პატარა ასოებად
  }
});

console.log(modifiedNames);


// ------------------------------------------------------


// map მეთოდის კლონი
function myMap(array, callback) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
      resultArray.push(callback(array[i], i, array));
    }
    return resultArray;
  }
  
  // კლონის გამოყენება იგივე ამოცანისთვის
  const modifiedNamesClone = myMap(names, (name, index) => {
    if (index % 2 === 0) {
      return name.toUpperCase();
    } else {
      return name.toLowerCase();
    }
  });
  
  console.log(modifiedNamesClone);

  



// map აბრუნებს ახალ მასივს, რომელშიც ინახება გადამუშავებული მონაცემები, ხოლო თავდაპირველი მასივი უცვლელი რჩება.

// forEach არაფერს აბრუნებს და მხოლოდ მოქმედების შესრულებას ახდენს თითოეულ ელემენტზე (ე.წ. "side-effect"), მაგალითად, კონსოლში ბეჭდვას ან სხვა ფუნქციის გამოძახებას.

//-------------------------------------------------------------------------------------------------------------------------------------------------



// თავდაპირველი მასივი 5 ობიექტით
const people = [
    { name: "Ana", age: 22 },
    { name: "Giorgi", age: 17 },
    { name: "Nino", age: 18 },
    { name: "Dato", age: 15 },
    { name: "Mariam", age: 25 }
  ];
  
  // Filter ფუნქციით - 18 ან მეტი ასაკის ადამიანების მასივი
  const adults = people.filter(person => person.age >= 18);
  
  // Filter ფუნქციით - 18-ზე ნაკლები ასაკის ადამიანების მასივი
  const minors = people.filter(person => person.age < 18);
  
  console.log("18 ან მეტი ასაკის ადამიანები:", adults);
  console.log("18-ზე ნაკლები ასაკის ადამიანები:", minors);


//------------------------------------------------------------------


// საკუთარი filter ფუნქციის კლონი
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  // საკუთარი filter ფუნქციის გამოყენებით - 18 ან მეტი ასაკის ადამიანების მასივი
  const customAdults = customFilter(people, person => person.age >= 18);
  
  // საკუთარი filter ფუნქციის გამოყენებით - 18-ზე ნაკლები ასაკის ადამიანების მასივი
  const customMinors = customFilter(people, person => person.age < 18);
  
  console.log("18 ან მეტი ასაკის ადამიანები (customFilter):", customAdults);
  console.log("18-ზე ნაკლები ასაკის ადამიანები (customFilter):", customMinors);
  