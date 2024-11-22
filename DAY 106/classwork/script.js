// შექმენით დაპირება
let getBookFromFriend = new Promise((resolve, reject) => {
    let friendBringsBook = true; // მოდით, ვთქვათ, რომ მეგობარი ცდილობს წიგნი მოიტანოს

    if (friendBringsBook) {
        resolve("წიგნი წარმატებით მივიღე!"); // წარმატების შემთხვევაში, resolve გამოიძახება
    } else {
        reject("მეგობარი წიგნს არ მომიტანა."); // შეცდომის შემთხვევაში, reject გამოიძახება
    }
});

// .then() და .catch() გამოყენება
getBookFromFriend
    .then((message) => {
        // თუ მეგობარი წიგნი მოიტანა
        console.log(message); // "წიგნი წარმატებით მივიღე!"
    })
    .catch((error) => {
        // თუ მეგობარი წიგნს არ მოიტანა
        console.log(error); // "მეგობარი წიგნს არ მომიტანა."
    });
