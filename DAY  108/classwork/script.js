const url = 'https://api.example.com/data'; // ეს არის URL, სადაც მოთხოვნას ვაგზავნით.

fetch(url)
  .then(response => {
    // აქ არის მონაცემების წარმატებული დაბრუნება
    console.log(response); // დაბეჭდეთ დაბრუნებული დაპირება
    return response.json(); // მონაცემების JSON ფორმატში გადაყვანა
  })
  .then(data => {
    // წარმატებით მიღებული JSON მონაცემების დამუშავება
    console.log(data);
  })
  .catch(error => {
    // შეცდომის დამუშავება, თუ რამე არასწორად წავიდა
    console.error('Error:', error);
  });
