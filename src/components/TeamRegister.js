import React, { useState, useEffect } from "react";
import facade from "../ApiFacade";


import './generel.css';


export default function TeamRegister() {

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
        facade.createTeam(team)
    }


    return (
        <div> 
        <h1> Opret Hold </h1>
              <div>

              <div>  {status} </div>
                


                <div className="inputForm"> 
                    Holdets navn
                    <input type="text" id="teamName" placeholder="..." onChange={ setTeamData("teamName") }/>
                    Minimums alderen
                    <input type="text" id="minAge" placeholder="..." onChange={ setTeamData("minAge") }/>

                    Maximums alderen
                    <input type="text" id="maxAge" placeholder="..." onChange={ setTeamData("maxAge") }/>

                   Årlige pris for at være med på holdet
                    <input type="text" id="price" placeholder="..." onChange={ setTeamData("price") }/>

                    Id på sportsgren
                    <input type="text" id="id" placeholder="Tjek sportsgrenside id'er"onChange={ setTeamData("id") }/>

                    <button onClick={ onSubmit }>Opret</button>

                    </div>
                   
             
              </div>
              </div>
      );

}