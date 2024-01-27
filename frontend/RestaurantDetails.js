// RestaurantDetail.js
import React, { useEffect, useState } from 'react';

function RestaurantDetail({ match }) {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const restaurantId = match.params.id;
    fetch(`/restaurants/${restaurantId}`)
      .then((response) => response.json())
      .then((data) => setRestaurant(data))
      .catch((error) => console.error('Error:', error));
  }, [match.params.id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <h3>Pizzas</h3>
      <ul>
        {restaurant.pizzas.map((pizza) => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantDetail;
