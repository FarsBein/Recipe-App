import React,{useContext} from 'react';
import { RecipeContext } from '../context/RecipeApiContext';
import {Link} from 'react-router-dom'
import '../App.css'

const RecipeCards = () => {
    const context = useContext(RecipeContext)
    console.log(context)
    return (
        <div>
            <div className="items">
                {context.loading ? 'loading...': 
                context.notFound ? 'sorry we can\'t find what you are looking for...' :   
                context.recipes.map(item => (
                    <Link to={`/recipe-page/${item.recipe.calories}`}>
                        <div key={item.recipe.calories} className='recipe'>
                            <img src={item.recipe.image} alt=""/>
                            <h3>{item.recipe.label}</h3>
                            
                        </div> 
                    </Link>

                ))}
            </div>
            <div>
            <br/>
            </div>
        </div>

    );
}

export default RecipeCards;
