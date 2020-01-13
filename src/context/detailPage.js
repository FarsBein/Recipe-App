import React,{useEffect,useState,useContext} from 'react';
import { RecipeContext } from '../context/RecipeApiContext';
import HomePage from '../component/HomePage';
const DetailPage = ({match}) => {
    const [id,setId] = useState({
        id:  parseFloat(match.params.id),
        recipe:{}
    })
    const context = useContext(RecipeContext)
    console.log(context)
    
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
            <div>
                <div className='App'>
                    <h1>{id.recipe.label}</h1>
                    {/* <img src={id.recipe.Image} /> */}
                </div>                
            </div>

    );
}

export default DetailPage;
