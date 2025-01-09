const names = ["John", "Jane", "Alice", "Bob", "Charlie"];

const listItems = names.map((name, index) => {
  const li = document.createElement("li");
  li.textContent = name;
  li.classList.add("list-item");
  return li;
});

const list = document.createElement("ul");
list.classList.add("styled-list");
listItems.forEach(li => list.appendChild(li));

const container = document.getElementById("list-container");
container.appendChild(list);
