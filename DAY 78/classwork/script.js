let myInfo = {
    name: "Onise",
    surname: "bilikhodze",
    place: "Georgia",
    age: 17,
    academy: "goa"
}
console.log(myInfo)


// -----------------------------------


let name1 = document.getElementById("one")
let name2 = document.getElementById("two")

name1.textContent = "Goa"
name1.style.color = "green"

name2.textContent = "Best Academy"
name2.style.color = "lightgreen"


// -------------------------------------


function greetings(){
    let paragraph = document.getElementById("greet-p")
    paragraph.textContent = "Hello"
}

// --------------------------------------


function changeOne(){
    let buttonOne = document.getElementById("changeColor")
    buttonOne.style.color = "red"
}

function changeTwo(){
    let buttonTwo = document.getElementById("changeColor")
    buttonTwo.style.color = "yellow"
}

function changeTree(){
    let buttonTree = document.getElementById("changeColor")
    buttonTree.style.color = "green"
}