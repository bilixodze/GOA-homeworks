// შექმენით სარეგისტრაციო ფორმა, სადაც მომხმარებელი შემოიტანს 3 მნიშვნელობას, პირველი სახელი, მეორე გვარი და მესამე ემაილი, ჯავასკრიპტის დახმარებით ეს მნიშვნელობები დადასტურებს შემდეგ უნდა წამოიღოთ და შექმნათ ობიექტი რომელსაც დაამატებთ database მასივში, ობიექტი უნდა შეიქმნასს კონსტრუქტორის დახმარებით, კონსტრუქტორს დააქრვით Account, შემდეგ კი კომენტარებით ახსენით რას აკეთებს new და this


const form = document.getElementById("myForm");

const dataBase = [];

function Account(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e)


    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;

    const acc = new Account(firstname, lastname, email);

    dataBase.push(acc);

    console.log(dataBase)
})