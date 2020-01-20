import React from 'react';
import NavBar from './partials/NavBar';
import LeftAppend from './partials/LeftAppend';
import Main from './partials/Main';
import RightAppend from './partials/RightAppend';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LeftAppend />
      <Main />
      <RightAppend />
    </div>
  );
}

export default App;