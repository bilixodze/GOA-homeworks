function manualFilter(callback, array) {
    const result = []; // ახალი მასივი

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) { // გადაამოწმებთ მოცემულ ელემენტზე
            result.push(array[i]); // თუ true დაბრუნდა, დაამატეთ ახალ მასივში
        }
    }

    return result; // დააბრუნეთ ახალი მასივი
}

// მაგალითისთვის, დავწეროთ ფუნქცია რომელიც გადამოწმებს თუ არის ელემენტი მეტი 10-ის
function isGreaterThanTen(num) {
    return num > 10;
}

// გამოვიყენოთ manualFilter
const numbers = [5, 12, 8, 20, 3];
const filteredNumbers = manualFilter(isGreaterThanTen, numbers);

console.log(filteredNumbers); // უნდა დაუბრუნოს [12, 20]
