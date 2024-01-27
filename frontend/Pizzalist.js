// PizzasList.js
import React, { useEffect, useState } from 'react';

function PizzasList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div>
      <h2>Pizzas</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PizzasList;
