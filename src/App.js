import './App.css';
/* import { Routes, Route } from 'react-router-dom'; does not work on gh-pages, needs HashRouter*/
import Home from './Home/Home';
import ProjectContext from './ProjectContext';
import React from "react"


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
