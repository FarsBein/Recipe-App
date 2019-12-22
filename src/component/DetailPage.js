import React from 'react';

const DetailP = ({details}) => {

    return (
        <div>
            <h1>Here u go</h1>
            <div  className='App'>
                <h3>{details.recipe.label}</h3>
                <img src={details.recipe.image} alt=""/>
            </div> 
        </div>
    );
}

export default DetailP;
