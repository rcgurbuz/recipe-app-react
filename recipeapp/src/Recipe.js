import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, i) => (
          <li className={style.ing} key={i}>
            {ingredient.text}
          </li>
        ))}
      </ol>
      <h3>Total Calories: {calories}</h3>
      <img className={style.image} src={image} alt='meal_img' />
    </div>
  );
};

export default Recipe;
