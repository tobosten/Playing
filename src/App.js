import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ProjectContext from './ProjectContext';
import React, { useContext } from "react"


function App() {


  return (
    <ProjectContext>
      <div className="App">
        <Home />
        {/* <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes> */}
      </div>
    </ProjectContext>
  );
}



export default App;
