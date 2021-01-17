import React, { useState, useEffect } from "react";
import facade from "../ApiFacade";
import './generel.css';


export default function RemoveTeam() {

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
       facade.removeTeam(team)
    }


    return (
        <div> 
        <h1> Slet Hold </h1>
              <div>

              <div>  {status} </div>
                <div className="inputForm"> 
                    Hold Id:
                    <input type="text" id="id" placeholder="..." onChange={ setTeamData("id") }/>
                  

                    <button onClick={ onSubmit }>Slet</button>
                    </div>
              </div>
              </div>
      );

}