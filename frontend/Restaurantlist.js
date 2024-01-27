// RestaurantsList.js
import React, { useEffect, useState } from 'react';

function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantsList;
