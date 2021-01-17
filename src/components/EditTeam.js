import React, { useState, useEffect } from "react";
import facade from "../ApiFacade";

import './generel.css';


export default function EditTeam() {

    const [team, setTeam] = useState({})
    const  [status, setStatus] =useState("")

    const setTeamData = (key) => {
        return (event) => {
            setTeam({
                ...team,
                [key]: event.target.value
            })
        }
    }

    const onSubmit = () => {
        console.log(team)
       facade.editTeam(team)
    }


    return (
        <div> 
        <h1> Rediger hold </h1>
        
              <div>

              <div>  {status} </div>
                
                <div className="inputForm"> 
                    Hold Id:
                    <input type="text" id="id" placeholder="..." onChange={ setTeamData("id") }/>

                    Hold Navn:
                    <input type="text" id="teamName" placeholder="..." onChange={ setTeamData("teamName") }/>

                    Minimum Alder:
                    <input type="text" id="minAge" placeholder="..." onChange={ setTeamData("minAge") }/>

                    Maximum Alder:
                    <input type="text" id="maxAge" placeholder="..." onChange={ setTeamData("maxAge") }/>

                    Årlig pris:
                    <input type="text" id="price" placeholder="..." onChange={ setTeamData("price") }/>


                    <button onClick={ onSubmit }>Rediger Hold</button>
                  
                    </div>
                  
             
              </div>
              </div>
      );

}