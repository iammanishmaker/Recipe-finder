import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h1>count2 = {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: Hisar</h2>
      <h3>Contact-Info: @gmail.com</h3>
    </div>
  );
};

export default User;
