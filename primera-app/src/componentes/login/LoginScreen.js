import React from 'react'

export const LoginScreen = ({history}) => {

    const manejarIngreso=()=>{
    
      history.replace('/')
    }
    
    return (
        <div className="continer mt-5">
            <h1>Login screen</h1>
            <hr></hr>
<button className="btn btn-outline-primary" onClick={manejarIngreso}>Login</button>

        </div>
    )
}
