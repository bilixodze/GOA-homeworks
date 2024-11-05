function addRandomParagraph() {
    // შემთხვევითი რიცხვის გენერაცია 0-1000 დიაპაზონში
    const randomNumber = Math.floor(Math.random() * 1001); 

    // ახალი პარაგრაფის შექმნა
    const paragraph = document.createElement('p');
    paragraph.textContent = 'შემთხვევითი რიცხვი: ' + randomNumber;

    // პარაგრაფის დამატება body-ში
    document.body.appendChild(paragraph);
}