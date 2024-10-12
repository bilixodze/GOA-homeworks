// შექმენით ლოგიკა რომლის მიხედვითაც მომხმარებელს უნდა შემოატანინოთ პაროლი თუ პაროლი სწორია alert-ის საშვალებით გამოიტანეთ რომ მას მიეცა წვდომა, ხოლო თუ არასწორია თავიდან შეეკითხეთ პაროლი და მოაკელით პაროლის მცდელობა, თავიდან მცდელობები არის 3 თუ მცდელობები ამოიწურა ითიშება while ციკლი, ყოველ ცდაზე უნდა გამოუტანოთ მცდელობების რაოდენობა (დაგჭირდებათ while ციკლი და if პირობითი განცხადება)

let attempts = 4; 

password = "onise123"
let pass;

while(pass !== password){
    pass = prompt("please enter password:")
    
    if(attempts === 0){
        alert("access blocked")
        break;
    }
    
    alert("You have" + " " + attempts + " " + "left")

    if(pass === password){
        alert("access granted")
        break;
    }else{
        attempts = attempts - 1
    }
}