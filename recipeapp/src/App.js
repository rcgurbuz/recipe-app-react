import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID = '87488148';
  const APP_KEY = '7cd27780cfdc777f4564d27b33bcca92';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    setQuery(search);
    e.preventDefault();
  };

  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' a type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
