import React from "react";

const NameList = () => {
  // სახელების მასივი
  const names = ["ანა", "გიორგი", "ნინო", "მარიამი"];

  return (
    <ul>
      {/* map მეთოდის გამოყენება სიის დასარენდერებლად */}
      {names.map((name) => (
        <li>{name}</li> // Key არ არის მითითებული
      ))}
    </ul>
  );
};

export default NameList;


// ამ დავალებაში მივიღებთ Key ერორს