import React from 'react';
import './App.css';
import HomePage from './component/HomePage'
import RecipeCards from './component/RecipeCards';


function App() {
  return (
    <div className="App">
        <HomePage />
        <RecipeCards />
    </div>
  );
}

export default App;
