// // 1)

// const numbers = [1, 2, 3, 4, 5];

// // ჯამის გამოთვლა
// const sum = numbers.reduce((acc, current) => acc + current, 0);
// console.log("Sum:", sum); // შედეგი: 15

// // ნამრავლის გამოთვლა
// const product = numbers.reduce((acc, current) => acc * current, 1);
// console.log("Product:", product); // შედეგი: 120


// //--------------------------------------------------------------------


// function myReduce(array, callback, initialValue) {
//     let accumulator = initialValue;
  
//     for (let i = 0; i < array.length; i++) {
//       accumulator = callback(accumulator, array[i], i, array);
//     }
  
//     return accumulator;
//   }
  
//   // კლონის გამოყენება ჯამისთვის
//   const customSum = myReduce(numbers, (acc, current) => acc + current, 0);
//   console.log("Custom Sum:", customSum); // შედეგი: 15
  
//   // კლონის გამოყენება ნამრავლისთვის
//   const customProduct = myReduce(numbers, (acc, current) => acc * current, 1);
//   console.log("Custom Product:", customProduct); // შედეგი: 120
  

  //--------------------------------------------------------------------------------------------------------------------------------

//   // 2)

//   // საწყისი მასივი
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // map მეთოდის გამოყენებით
// const modifiedNumbers = numbers.map((num, index) => {
//   // თუ ინდექსი არის ლუწი, რიცხვი გამრავლდება 2-ზე
//   if (index % 2 === 0) {
//     return num * 2;
//   }
//   // თუ ინდექსი კენტია, რიცხვი რჩება უცვლელად
//   return num;
// });

// console.log(modifiedNumbers);

// //-----------------------------------------------------------

// // ფუნქცია, რომელიც იმეორებს map მეთოდის ლოგიკას
// function cloneMap(array, callback) {
//     const result = []; // ახალი მასივი, სადაც შეინახება გადამუშავებული მნიშვნელობები
  
//     for (let i = 0; i < array.length; i++) {
//       // callback ფუნქციის გამოძახება, სადაც პარამეტრებად გადაეცემა მიმდინარე ელემენტი და ინდექსი
//       const transformedValue = callback(array[i], i);
//       // მიღებული მნიშვნელობის დამატება ახალ მასივში
//       result.push(transformedValue);
//     }
  
//     return result; // დააბრუნეთ ახალი, გადამუშავებული მასივი
//   }
  
//   // cloneMap ფუნქციის გამოყენება იგივე ლოგიკით
//   const modifiedNumbersClone = cloneMap(numbers, (num, index) => {
//     if (index % 2 === 0) {
//       return num * 2;
//     }
//     return num;
//   });
  
//   console.log(modifiedNumbersClone);

  
  //--------------------------------------------------------------------------------------------------------------------------------

  // 3)

  // 1. ორიგინალი მასივი
const numbers = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8];

// 2. ვქმნით ორიგინალ filter მეთოდით გაფილტრულ ახალ მასივს
const filteredNumbers = numbers.filter((num, index, array) => {
  return array.filter(n => n === num).length === 2;
});

// შედეგის გამოტანა
console.log("Filtered array with original filter:", [...new Set(filteredNumbers)]);

// 3. filter მეთოდის კლონი
function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// კლონით მიღებული შედეგი
const myFilteredNumbers = myFilter(numbers, (num, index, array) => {
  return myFilter(array, n => n === num).length === 2;
});

// უნიკალური ელემენტების დასტა
console.log("Filtered array with myFilter clone:", [...new Set(myFilteredNumbers)]);
