// first task

const interval = setInterval(() => {
    const now = new Date();
    const minutes = now.getMinutes();

    // შეიქმნას Date ობიექტი
    const dateObject = new Date();
    console.log(dateObject);

    // შეამოწმოს, არის თუ არა წუთი 35
    if (minutes === 0,35) {
        clearInterval(interval);
        console.log("ინტერვალი გაწყვეტილია");
    }
}, 1000); // ინტერვალი მუშავდება 1 წამში ერთხელ
