import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
      <Home />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}



export default App;
