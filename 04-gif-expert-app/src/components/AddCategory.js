import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory  = ({setCategories}) => {



const [inputValue, setInputValue] = useState("Hola soy programador");
const handletInputChange=(e)=>{
    
setInputValue(e.target.value);

};
const handleSubmit=(evento)=>{
    evento.preventDefault();//=>para prevenir el comportamineto por defecto del formulario
    console.log('submit hecho');
    if (inputValue.trim().length>2) {

        setCategories(cats=>[inputValue,...cats]);
        setInputValue('');
    } else {
        console.warn('eror');
    }
   
    
}

    return (       
           <form onSubmit={handleSubmit}>
           <input 
            type="text" 
            value={inputValue}
           onChange={handletInputChange}          
            
            ></input>
           </form>
         
       
    )
}

AddCategory.prototype={
setCategories:PropTypes.func.isRequired

}