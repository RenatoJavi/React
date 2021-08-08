import React from 'react'
import { LoginScreen } from '../componentes/login/LoginScreen'
import {
    BrowserRouter as Router,
    Switch,
    Route,    
  } from "react-router-dom";

import { DashboardRutas } from './DashboardRutas';

export const AppRutas = () => {
    return (
        <Router>
          <div>
           {/* <Navbar/>     */}
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/login" component={LoginScreen}/>
                
              <Route path="/" component={DashboardRutas}/>               
            
            </Switch>
          </div>
        </Router>
      );
}
