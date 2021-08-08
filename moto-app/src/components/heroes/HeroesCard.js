import React from 'react';
import imagenes from './img/imagenes';
import dcsuperman from './img/dcsuperman.jpg'




export const HeroesCard = ({
         id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
        
    }) => {
    return (
    
        <div className="card ms-3" style={{maxWidth:540}}>
             <div className="row no-gutters">              
              <div className="col-md-4"> 
              {/* <img src={`./img/${id}.jpg`} alt ={superhero}/> */}
             
              <img src={imagenes[0].id} className="card-img" alt={superhero}/>
              <img src={imagenes[1].id} className="card-img" alt={superhero}/>
            
               </div>       
            <div className="col-md-8" >  
                <div className="card-body">  
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego!==characters)  && <p className="card-text">{characters}</p>      

                        }



                </div>
            
            
            
            
            
                   </div>


        </div>
    </div>  

    )    
}
/* <img src={`../../assets/heroes/${id}.jpg`} className="card-img" alt={superhero}/> 

<img  className="card-img-top"  src={ `../../assets/heroes/${id}.jpg`} alt={superhero}  />

*/