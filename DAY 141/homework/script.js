window.addEventListener('resize', function() {
    console.log("ფანჯრის ზომა შეიცვალა!");
});

setInterval(function() {
    console.log("loading...");
}, 1000);

document.getElementById("colorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "blue" ? "green" : "blue";
});

window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width < height) {
        document.getElementById("windowStatus").innerText = "ფანჯარა არის ვერტიკალური";
    } else {
        document.getElementById("windowStatus").innerText = "ფანჯარა არის ჰორიზონტალური";
    }
});
