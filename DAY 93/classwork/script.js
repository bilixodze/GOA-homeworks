// გლობალური ფარგლები: გლობალურ ფარგლებში დეკლარირებული ცვლადები ხელმისაწვდომია კოდის ნებისმიერ ადგილას.

var globalVar = "Hello, World!"; // გლობალური ცვლადი
function example() {
  console.log(globalVar); // წვდომა გლობალურ ცვლადზე
}
example();


// ლოკალური (ფუნქციის) ფარგლები: ფუნქციის ფარგლებში დეკლარირებული ცვლადები მხოლოდ ამ ფუნქციის შიგნითაა ხელმისაწვდომი.

function localExample() {
    var localVar = "I am local";
    console.log(localVar); // წვდომა ფუნქციის შიგნით
  }
  localExample();
  // console.log(localVar); // შეცდომა: localVar არ არის გლობალურად ხელმისაწვდომი

  
//   ბლოკის ფარგლები: let და const გამოიყენება ბლოკის ფარგლებში {}, რაც ნიშნავს, რომ ისინი ხელმისაწვდომია მხოლოდ ამ ბლოკის შიგნით.

function blockScopeExample() {
    if (true) {
      let blockVar = "I am inside a block";
      console.log(blockVar); // ბლოკის შიგნითაა ხელმისაწვდომი
    }
    // console.log(blockVar); // შეცდომა: blockVar არ არის ხელმისაწვდომი ამ ბლოკის გარეთ
  }
  blockScopeExample();

  
//   ლექსიკური ფარგლები ნიშნავს, რომ შიდა ფუნქციას შეუძლია წვდომა ჰქონდეს მისი გარე ფუნქციის ცვლადებზე, თუნდაც გარე ფუნქცია უკვე დასრულებული იყოს.

function outerFunction() {
    let outerVar = "I am from outer function";
    function innerFunction() {
      console.log(outerVar); // წვდომა გარე ცვლადზე ლექსიკური ფარგლების მეშვეობით
    }
    return innerFunction;
  }
  
  const closureExample = outerFunction();
  closureExample(); // "I am from outer function"
  