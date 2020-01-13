import React,{useContext} from 'react';
import { RecipeContext } from '../context/RecipeApiContext';
import { TabContainer, Row, Button } from 'react-bootstrap';
import '../App.css';
const HomePage = () => {
    const {Search,typedName,handleChange} = useContext(RecipeContext)

    return ( 
        <div>
            <header className="App-header">
                <p>
                    Get any dish you want
                </p>
                <TabContainer>
                    <Row>
                        <h6>note: max of 3 searches per 1 minute</h6>
                        <input type='text' name='typedName' value={typedName} onChange={handleChange} style={{color:'black'}}/>
                        <button onClick={Search} className='searchButton'>Search!</button>
                    </Row>

                </TabContainer>

            </header>
        </div>
    );
}

export default HomePage;
