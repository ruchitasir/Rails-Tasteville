import React, { useState } from 'react';

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    name: ""
  })
  const { name } = formData;
  const { createSubmit } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value });
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      createSubmit(formData)
    }}>
      <h3>Create Food</h3>
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
