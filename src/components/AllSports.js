import React, { useState, useEffect } from "react";
import './generel.css';
export default function AllSports() {
    const [sports, setSports] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const  [status, setStatus] =useState("")

    useEffect(() => {
        fetch("https://engineeringbybirk.com/SportClub/api/Sports")
        .then(sports => sports.json())
        .then(sports => {
            setSports(sports)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loader</p>
    }

    

   

    return (
        <div> 
            <h1 > Alle sportsgrene </h1>
            <div>  {status} </div>

        <div > 
            <ul>
                { sports.map(entry => {
                    return (
                        <li className="table">
                           
                            <p>Id: {entry[0]}</p>
                            <p>Navn: { entry[1] }</p>
                            <p>Beskrivelse: { entry[2]}</p>
                        </li>
                        )
                }) }
            </ul>
        </div>
        </div>
    )
  }
