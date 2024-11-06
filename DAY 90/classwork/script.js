const box = document.getElementById("box");
    const container = document.getElementById("container");
    
    let direction = "right"; // დაწყებითი მიმართულება
    let speed = 4; // სიჩქარე თითოეულ პიქსელზე

    function moveBox() {
        const boxRect = box.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        switch (direction) {
            case "right":
                if (boxRect.right < containerRect.right) {
                    box.style.left = box.offsetLeft + speed + "px";
                } else {
                    direction = "down"; // გადადის ქვემოთ
                }
                break;
            case "down":
                if (boxRect.bottom < containerRect.bottom) {
                    box.style.top = box.offsetTop + speed + "px";
                } else {
                    direction = "left"; // გადადის მარცხნივ
                }
                break;
            case "left":
                if (boxRect.left > containerRect.left) {
                    box.style.left = box.offsetLeft - speed + "px";
                } else {
                    direction = "up"; // გადადის ზემოთ
                }
                break;
            case "up":
                if (boxRect.top > containerRect.top) {
                    box.style.top = box.offsetTop - speed + "px";
                } else {
                    direction = "right"; // გადადის მარჯვნივ
                }
                break;
        }
        
        requestAnimationFrame(moveBox); // ანიმაციის გაგრძელება
    }

    moveBox();