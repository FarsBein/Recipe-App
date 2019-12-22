import React,{useContext} from 'react';
import { RecipeContext } from '../context/RecipeApiContext';
import {Link} from 'react-router-dom'

const RecipeCards = () => {
    const context = useContext(RecipeContext)
    console.log(context)
    return (
        <div>
            {context.loading ? 'loading...': 
            context.notFound ? 'sorry we can\'t find what you are looking for...' :   
            context.recipes.map(item => (
                <Link to={`/recipe-page/${item.recipe.calories}`}>
                    <div key={item.recipe.calories}>
                        <h3>{item.recipe.label}</h3>
                        <img src={item.recipe.image} alt=""/>
                    </div> 
                </Link>

            ))}
        </div>
    );
}

export default RecipeCards;
