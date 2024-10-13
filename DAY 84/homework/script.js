//  შექმენით ობიექტის კონსტრუქტორი რომელსაც გადაეცემა 4 მნიშვნელობა

let myInformation = [];

function myInfo(name, surname, hobby, favColor){
    this.name = name;
    this.surname = surname;
    this.hobby = hobby;
    this.favColor = favColor;
}

const info = new myInfo("onise", "bilikhodze", "reading", "red");

myInformation.push(info);

console.log(myInformation)