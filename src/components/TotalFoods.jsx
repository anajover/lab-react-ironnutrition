import React from 'react';

function TotalFoods(props) {
  const { totalCalories } = props;

  return (
    <div>
      <h3>Today's foods</h3>

      {totalCalories.map((eachCalorie) => {
        return (
          <>
            <ul>
              <li>
                {eachCalorie.quantity} {eachCalorie.name} ={' '}
                {eachCalorie.quantity * eachCalorie.calories} calories
              </li>
            </ul>
            <p>Total: </p>
          </>
        );
      })}
    </div>
  );
}

export default TotalFoods;
