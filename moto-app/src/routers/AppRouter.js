import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardHijaRouter } from './DashBoardHijaRouter';
  //https://reactrouter.com/web/guides/quick-start  copiado de esta pagina
export const AppRouter = () => {
    return (
        <Router>
          <div>
         
            <Switch>
             <Route exact path="/Login" component={LoginScreen} ></Route>
             <Route  path="/"  component={DashBoardHijaRouter}/>
         
            </Switch>
          </div>
        </Router>
      );
}


            /* <Navbar/> */
    
            /* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */