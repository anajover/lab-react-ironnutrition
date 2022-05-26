import React from 'react';
import { useState } from 'react';

function AddForm(props) {
  const { addFood } = props;

  const [image, setImage] = useState('http://');
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleImageChange = (event) => setImage(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('haciendo submit');
    const newFood = {
      image,
      name,
      calories,
      quantity,
    };
    setImage('http://');
    setName('');
    setCalories(0);
    addFood(newFood);
    setQuantity(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          onChange={handleImageChange}
          value={image}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />

        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          name="calories"
          onChange={handleCaloriesChange}
          value={calories}
        />

        <button>Add Food</button>
      </form>
    </div>
  );
}

export default AddForm;
