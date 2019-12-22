import React,{useContext} from 'react';
import { RecipeContext } from '../context/RecipeApiContext';

const HomePage = () => {
    const {Search,typedName,handleChange} = useContext(RecipeContext)

    return ( 
        <div>
            <header className="App-header">
                <p>
                    we got something for you...
                </p>
                <input type='text' name='typedName' value={typedName} onChange={handleChange} />
                <button onClick={Search}>Search!</button>
            </header>
        </div>
    );
}

export default HomePage;
