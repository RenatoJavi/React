import React from 'react'
import { Redirect, Switch,Route } from 'react-router-dom'
import { DcScreen } from '../componentes/dc/DcScreen'
import { HeroesScreen } from '../componentes/heroes/HeroesScreen'
import { Navbar } from '../componentes/interfazUsuario/Navbar'
import { MarvelScreen } from '../componentes/marvel/MarvelScreen'

export const DashboardRutas = () => {
    return (
        <>
           <Navbar/>

        <div className="container mt-5">
        
        <Switch>
              <Route exact path="/marvel" component={MarvelScreen}/>                
             
              <Route exact path="/DC" component={DcScreen}/>   

              <Route exact path="marvel/:heroeId" component={HeroesScreen}/>  


            <Redirect to="/marvel"  />        
            
            </Switch>
        </div>

        </>
    )
}
