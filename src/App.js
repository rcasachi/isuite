import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './partials/NavBar';
import LeftAppend from './partials/LeftAppend';
import RightAppend from './partials/RightAppend';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <LeftAppend />
          <Switch>
            <Routes />
          </Switch>
        <RightAppend />  
      </BrowserRouter>
    </div>
  );
}

export default App;