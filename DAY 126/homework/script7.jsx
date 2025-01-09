const categories = [
    { name: "Fruits", items: ["Apple", "Banana", "Cherry"] },
    { name: "Vegetables", items: ["Carrot", "Lettuce", "Spinach"] },
  ];
  const CategoryList = () => (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  