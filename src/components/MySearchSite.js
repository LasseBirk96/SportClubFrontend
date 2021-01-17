import React, { useState, useEffect } from "react";
import './generel.css';

export default function MySearchSite() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const  [status, setStatus] =useState("")


    useEffect(() => {
        fetch("https://engineeringbybirk.com/SportClub/api/SportsTeams/all")
        .then(data => data.json())
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loader</p>
    }


    return (
        <div> 
            <h1 className="hold" > Hold </h1>

            <div>  {status} </div>

        <div > 
            <ul>
                { data.map(entry => {
                    return (
                        <li className="table">
                            
                            <p>Id: {entry[0]}</p>
                            <p>Navn på hold: {entry[1]}</p>
                            <p> Minimum alder: {entry[2]} år</p>
                            <p>Maximum alder: {entry[3]} år</p>
                            <p>Årlig pris: {entry[4]}kr</p>
                            
                        </li>
                        )
                }) }
            </ul>
        </div>
        </div>
    )
  }

