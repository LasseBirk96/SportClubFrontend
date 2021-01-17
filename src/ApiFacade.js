import links from "./settings";
const URL = links.server;



function ApiFacade() {

   

  

    const createTeam = (team) => {
        fetch(URL + "/api/SportsTeams", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(team),
        })
        .then(response => response.json())
        .then(team => {
        console.log('Success:', team);
       
        })
        .catch((error) => {
        console.error('Error:', error);
       
        });
    } 


    const removeTeam = (team) => {
        fetch(URL + "/api/SportsTeams/delete", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(team),
        })
        .then(response => response.json())
        .then(team => {
        console.log('Success:', team);
        

        })
        .catch((error) => {
        console.error('Error:', error);
   
        });
    } 


    const editTeam = (team) => {
        fetch(URL + "/api/SportsTeams/update", {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(team),
        })
        .then(response => response.json())
        .then(team => {
        console.log('Success:', team);
   
        })
        .catch((error) => {
        console.error('Error:', error);

        });
    } 


    const createSport = (team) => {
        fetch(URL + "/api/Sports", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(team),
        })
        .then(response => response.json())
        .then(team => {
        console.log('Success:', team);
        })
        .catch((error) => {
        console.error('Error:', error);
       
        });
    } 


    const getAllTeams = (team) => {
        fetch(URL + "/api/SportsTeams/all", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(team),
        })
        .then(response => response.json())
        .then(team => {
        console.log('Success:', team);

        })
        .catch((error) => {
        console.error('Error:', error);
       
        });
    } 

    const getAllSports = (team) => {
        fetch(URL + "/api/Sports", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(team),
        })
        .then(response => response.json())
        .then(team => {
        console.log('Success:', team);
        })
        .catch((error) => {
        console.error('Error:', error);
       
        });
    } 




   
   
    
  


   

    

    return {
     
        createTeam,
        removeTeam,
        editTeam,
        createSport,
        getAllTeams,
        getAllSports
    }

}

export default ApiFacade();