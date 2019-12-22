import React,{createContext,useEffect, useState} from "react"

export const RecipeContext = createContext()

const API_KEY = '608536474581a0abcd111ab11516ac76'
const API_ID = '3ba6cbf3'


const RecipeContextProvider = (props) =>{
    const [extra,setExtra] = useState({
        loading: true,
        notFound:false
      })
    
      const [recipes,setRecipes] = useState([])
      const [searchedFood,setSearchedFood] = useState('chicken')
      const [typedName, setTypedName] = useState('')
    
      const callRecipe = async () => {
        const results = await fetch(`https://api.edamam.com/search?q=${searchedFood}&app_id=${API_ID}&app_key=${API_KEY}`)
        const data = await results.json()
        if (data.count === 0){
          setExtra({
            loading:false,
            notFound:true
          })
        }else{
          setRecipes(data.hits)
          setExtra({
            loading:false,
            notFound:false
          })
        }
      }
    
      const Search = () => {
        setSearchedFood(typedName)
      }
    
      const handleChange=(event) => {
        setTypedName(event.target.value)
      }
    
      useEffect(() => {
        callRecipe()
        },[searchedFood]) 
     
    
    return(

        <RecipeContext.Provider 
            value={{
                recipes:[...recipes],
                ...extra, 
                Search:Search, 
                typedName: typedName, 
                handleChange: (event)=>{handleChange(event)}
                }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider