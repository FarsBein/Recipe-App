import React,{useEffect,useState,useContext} from 'react';
import { RecipeContext } from '../context/RecipeApiContext';

const DetailPage = ({match}) => {
    const [id,setId] = useState({
        id:  parseFloat(match.params.id),
        recipe:{}
    })
    const context = useContext(RecipeContext)
    console.log(context)
    console.log(match.params.id)
    
    const findRecipe = () => {
        context.recipes.map(
            item => {
            if (item.recipe.calories === id.id){
                console.log('run')
                return setId({
                    id:id.id,
                    recipe: item.recipe
                })}
            return null
            })
    }

    useEffect(()=>{
        findRecipe()
    },[])
    console.log(id)
    return (
            <div className='App'>
                <h1>{id.recipe.label}</h1>

            </div>
    );
}

export default DetailPage;
