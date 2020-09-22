import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneFood } from '../services/foods';

export default function FoodEdit(props) {
  const [formData, setFormData] = useState({
    name: ""
  })
  const { name } = formData;
  const { id } = useParams();
  const { foods, updateSubmit } = props;

  useEffect(() => {
    const prefilForm = () => {
      const singleFood = foods.find(food => food.id === Number(id))
      setFormData({ name: singleFood.name })
    }
    if (foods.length) {
      prefilForm();
    }
  }, [foods])

  // ===============================
  // ============== OR =============
  // ===============================

  // useEffect(() => {
  //   const prefilForm = async () => {
  //     const singleFood = await getOneFood(id);
  //     setFormData({ name: singleFood.name })
  //   }
  //   prefilForm();
  // }, [])

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value });
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      updateSubmit(id, formData)
    }}>
      <h3>Edit Food</h3>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
