import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  // const [count, setCount] = useState(0);
  const [number, setNumber] = useState();

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  return (
    <div>
      <p>Le compteur est à : {number} </p>
      <input value={number} onChange={handleNumberChange}></input>
      <button onClick={() => setNumber(Number(number) + 1)}>+1</button>
      <button onClick={() => setNumber(Number(number) - 1)}>-1</button>
    </div>
  );
}

export default Counter;
