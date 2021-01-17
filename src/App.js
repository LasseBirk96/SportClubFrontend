
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  NavLink, 
  useLocation,
  useHistory
 } from "react-router-dom";




import Home from "./components/Home"
import Header from "./components/Header"
import MySearchSite from "./components/MySearchSite"
import TeamRegister from "./components/TeamRegister"
import AllSports from "./components/AllSports"
import RemoveTeam from './components/RemoveTeam';
import EditTeam from "./components/EditTeam";
import SportMaker from "./components/SportMaker";


function App() {



 return (
   <Router>
  <div>
  <Header />
  <Switch>
    <Route exact path="/">
      <MySearchSite />
    </Route>
    <Route path="/page1">
      <TeamRegister />
    </Route>
    <Route path="/page2">
      <AllSports />
    </Route>
    <Route path="/page3">
      <EditTeam />
    </Route>
    <Route path="/page4">
      <RemoveTeam />
    </Route>
    <Route path="/page5">
      <SportMaker />
    </Route>

  </Switch>
</div>
</Router>
);
}
 
   

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
