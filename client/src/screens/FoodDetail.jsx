import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneFood } from '../services/foods';
import { addFlavor } from '../services/flavors';

export default function FoodDetail(props) {
  const [food, setFood] = useState(null);
  const [flavorId, setFlavorId] = useState('');
  const { id } = useParams();
  const { flavors } = props;

  useEffect(() => {
    const fetchFood = async () => {
      const singleFood = await getOneFood(id);
      setFood(singleFood)
    }
    fetchFood();
  }, [])

  const handleChange = (e) => {
    const { value } = e.target;
    setFlavorId(value)
  }

  const handleClick = async () => {
    const newFood = await addFlavor(id, flavorId);
    setFood(newFood);
  }

  return (
    <div>
      {
        food &&
        <>
          <h3>{food.name}</h3>
          {food.flavors.map(flavor => (
            <p>{flavor.name}</p>
          ))}
        </>
      }
      <select onChange={handleChange}>
        <option disabled selected>-- Select a Flavor --</option>
        {flavors.map(flavor => (
          <option value={flavor.id}>{flavor.name}</option>
        ))}
      </select>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
