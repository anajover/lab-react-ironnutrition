import React from 'react';
import { useState } from 'react';

function Food(props) {
  const { image, name, calories } = props.eachFoodProp;

  const [quantity, setQuantity] = useState(0);

  const handleChange = (event) => setQuantity(event.target.value);

  const handleClick = () => {
    const foodCalories = {
      quantity,
      name,
      calories,
    };
    props.totalFoodCalories(foodCalories);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} width="64px" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                name="qty"
                onChange={handleChange}
                value={quantity}
              />
            </div>
            <div className="control">
              <button onClick={handleClick} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Food;
