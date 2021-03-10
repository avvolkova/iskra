import React, { useState, useContext } from "react";

export default function Worm({ name, size, age }) {
  const [mySize, setMySize] = useState(size);

  const addSizeHandler = () => {
    setMySize((prev) => prev + 5);
  };

  return (
    <div>
       <div>name:{name}</div>
      <div>size:{mySize}</div>
      <div>age:{age}</div>
      <button onClick={addSizeHandler}>FEED ME</button>
      <hr />
    </div>
  );
}
