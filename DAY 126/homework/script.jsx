import React from "react";

const App = () => {
  // 1. Rendering a List
  const fruits = ["Apple", "Banana", "Cherry"];

  // 2. Conditional Rendering
  const isLoggedIn = true;

  // 3. Dynamic Attributes
  const imageAttributes = {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
  };

  // 4. Inline Styles
  const style = {
    backgroundColor: isLoggedIn ? "lightgreen" : "lightcoral",
    padding: "10px",
    textAlign: "center",
  };

  // 5. Rendering JSX from a Function
  const renderMessage = () => {
    return <p>This message is rendered from a function!</p>;
  };

  // 6. Template Strings in JSX
  const name = "John";
  const age = 30;

  // 7. Dynamic HTML Tag Rendering
  const DynamicTag = "h1";

  // 8. Nested Map Rendering
  const categories = [
    { category: "Fruits", items: ["Apple", "Banana", "Cherry"] },
    { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
  ];

  // 9. Rendering a Table
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  // 10. String Interpolation
  const greeting = "Hello";
  const person = "Alice";

  return (
    <div>
      {/* 1. Rendering a List */}
      <h2>1. Rendering a List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* 2. Conditional Rendering */}
      <h2>2. Conditional Rendering</h2>
      <p>{isLoggedIn ? "Welcome!" : "Please log in"}</p>

      {/* 3. Dynamic Attributes */}
      <h2>3. Dynamic Attributes</h2>
      <img {...imageAttributes} style={{ display: "block", margin: "10px 0" }} />

      {/* 4. Inline Styles */}
      <h2>4. Inline Styles</h2>
      <div style={style}>
        Background color changes based on login status!
      </div>

      {/* 5. Rendering JSX from a Function */}
      <h2>5. Rendering JSX from a Function</h2>
      {renderMessage()}

      {/* 6. Template Strings in JSX */}
      <h2>6. Template Strings in JSX</h2>
      <p>{`${name} is ${age} years old.`}</p>

      {/* 7. Dynamic HTML Tag Rendering */}
      <h2>7. Dynamic HTML Tag Rendering</h2>
      <DynamicTag>This is dynamic!</DynamicTag>

      {/* 8. Nested Map Rendering */}
      <h2>8. Nested Map Rendering</h2>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* 9. Rendering a Table */}
      <h2>9. Rendering a Table</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 10. String Interpolation */}
      <h2>10. String Interpolation</h2>
      <p>{`${greeting}, ${person}!`}</p>
    </div>
  );
};

export default App;
