import './App.css';
/* import { Routes, Route } from 'react-router-dom'; does not work on gh-pages, needs HashRouter*/
import Home from './Home/Home';
import ProjectContext from './ProjectContext';
import React from "react"
import Test from './Test/Test';
import SpaceImg from "./assets/spaceImg.png"
import Cloud from './Cloud/Cloud';
import styled from 'styled-components';


function App() {


  return (
    <ProjectContext>
      <>
       {/*  <Grid>
          <div className='item1'>hej</div>
          <div className='item2'>hej</div>
          <div className='item3'>hej</div>
        </Grid> */}
        <Cloud />
        {/* <Home /> */}
        {/* <Test /> */}

        {/* <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes> */}
      </>
    </ProjectContext>
  );
}

const Grid = styled.div`
  border: 2px solid black;
  display: grid;
  height: 100vh;
  margin: 50px;
  grid-template-columns: repeat(3, 1fr);
`;



export default App;
