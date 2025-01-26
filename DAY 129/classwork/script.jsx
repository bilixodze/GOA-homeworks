const photoUrls = [
    "css.jpg",
    "html.jpg",
    "js.jpg",
    "python.jpg",
    "React.png"
  ];
  
  const imgElements = photoUrls.map((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `Image ${index + 1}`;
    img.classList.add("styled-image");
    return img;
  });
  
  const container = document.getElementById("image-container");
  imgElements.forEach(img => container.appendChild(img));
  