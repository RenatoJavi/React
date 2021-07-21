import React from 'react'

export const LoginScreen = ({history}) => {

    const handleClick=()=>{
      history.replace('/') //uso history de los props 
            
    }
    return (

        
        <div className="container mt-5 "> 
            <h1>Login  screen motos</h1>
            <hr/>


            <button type="button" className="btn btn-success" onClick={handleClick}>Login</button>

        </div>
    )
}
