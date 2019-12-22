import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import App from './App'
import DetailPage from './context/detailPage'
import RecipeContextProvider from './context/RecipeApiContext';

function RouterPage(){
    return (
        <RecipeContextProvider>
            <Router>
                <Switch>
                    <Route exact path='/'  component={App} />
                    <Route path='/recipe-page/:id' component={DetailPage} />
                </Switch>
            </Router>
        </RecipeContextProvider>
    );
}

export default RouterPage;