import allFood from '../foods.json';
import { useState } from 'react';
import React from 'react';
import Food from '../components/FoodBox';
import AddForm from '../components/AddForm';
import Search from '../components/Search';
import TotalFoods from '../components/TotalFoods';

function FoodBox() {
  const [foodList, setFoodList] = useState(allFood);
  const [filteredFoods, setFilteredFoods] = useState(allFood);
  const [showForm, setShowForm] = useState(false);
  const [totalCalories, setTotalCalories] = useState([]);

  function addFood(FoodToAdd) {
    const newArr = [...foodList, FoodToAdd];
    setShowForm(false);
    setFoodList(newArr);
    setFilteredFoods(newArr);
  }

  const handleShowForm = () => {
    setShowForm(true);
  };

  const searchList = (search) => {
    const filteredArr = foodList.filter((eachFood) => {
      return eachFood.name.includes(search);
    });

    setFilteredFoods(filteredArr);
  };

  const totalFoodCalories = (foodCalories) => {
    setTotalCalories([...totalCalories, foodCalories]);
  };

  return (
    <div>
      <h1>IronNutrition</h1>

      <button onClick={handleShowForm}>Add New Food</button>

      {showForm === true && <AddForm addFood={addFood} />}

      <hr />

      <Search searchList={searchList} />

      <hr />

      <div id="total-food">
        <table>
          <td>
            {' '}
            {filteredFoods.map((eachFood, index) => {
              return (
                <Food
                  key={eachFood.name + index}
                  eachFoodProp={eachFood}
                  totalFoodCalories={totalFoodCalories}
                />
              );
            })}
          </td>
          <td class="food">
            <TotalFoods totalCalories={totalCalories} />
          </td>
        </table>
      </div>
    </div>
  );
}

export default FoodBox;
