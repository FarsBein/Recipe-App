import React from 'react';
import HomePage from './HomePage'
const DetailP = ({details}) => {

    return (
        <div>
            <HomePage />
            <div>
                <h1>Here u go</h1>
                <div  className='App'>
                    <h3>{details.recipe.label}</h3>
                    <img src={details.recipe.image} alt=""/>
                </div>                 
            </div>
        </div>
    );
}

export default DetailP;
