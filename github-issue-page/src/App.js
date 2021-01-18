import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyAppBar from "./components/AppBar";
import BodyApp from "./components/BodyApp";

function App() {
  return (
      <React.Fragment>
        <MyAppBar />
        <BodyApp />
      </React.Fragment>
  );
}

export default App;
