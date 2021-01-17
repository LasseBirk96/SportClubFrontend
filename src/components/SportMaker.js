import React, { useState, useEffect } from "react";
import facade from "../ApiFacade";

import './generel.css';


export default function SportMaker() {

    const [value, setValue] = useState({})
    const  [status, setStatus] =useState("")

    const setData = (key) => {
        return (event) => {
            setValue({
                ...value,
                [key]: event.target.value
            })
        }
    }

    const onSubmit = () => {
        console.log(value)
        facade.createSport(value)
    }


    return (
        <div> 
        <h1> Tilføj Sport </h1>
              <div>

              <div>  {status} </div>
                
                <div className="inputForm"> 
                    Navn På Sport:
                    <input type="text" id="sportName" placeholder="..." onChange={ setData("sportName") }/>

                    Beskrivelse Af Sport:
                    <input type="text" id="description" placeholder="..." onChange={ setData("description") }/>
                  

                    <button onClick={ onSubmit }>Tilføj</button>
                    </div>
              </div>
              </div>
      );

}