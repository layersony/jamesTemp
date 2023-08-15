import React, {useState} from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom"

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Home from './Home';
import Street from './Street'; // Import your Street component
import Documenting from './Documenting'; // Import other components as needed
import Arts from './Arts';
import Wildlife from './Wildlife';
import Events from './Events';
import BwPics from './BwPics';
import Food from './Food';
import FetchApi from './FetchApi';

function App() {
  const [photos,setPhoto] = useState(null)

  function onAddClick(category) {
    setPhoto(category)
  }
  return (
   
    <div className="App">
      <div id="signIn">
        <p>Sign up</p>
        <p>log in</p>
      </div>
      <>
        <NavBar addClick={onAddClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Street" element={<Street />} />
          <Route path="/Documenting" element={<Documenting/>} />
          <Route path="/Arts" element={<Arts />} />
          <Route path="/Wildlife" element={<Wildlife />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/BwPics" element={<BwPics/>} />
          <Route path="/Food" element={<Food />} />
        </Routes>
      </>
      <FetchApi photos ={photos}  />
      
      
      <SearchBar setPhoto={setPhoto} />
    </div>
    
  );
}

export default App;
