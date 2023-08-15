import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faHouse } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import FetchApi from './FetchApi';


function NavBar({ addClick }) {


  function handleClick(category) {
    addClick(category)
  }

  return (
    <div>
      <div className='sideBar'>
        <h2 className='photogenic'>
          <FontAwesomeIcon id="icon" icon={faCameraRetro} size="xl" style={{ color: "#15c65a" }} />
          Photo<span className="photo">genic</span>
        </h2>
        <h3 className="home">
          <FontAwesomeIcon icon={faHouse} size="sm" style={{ color: "#00000b" }} />
          <NavLink to="/" onClick={() => handleClick("")} >Home</NavLink>
        </h3>
        <p id='category'>photos category</p>
        <div className='flex'>
          <div><NavLink to="/Street" onClick={() => handleClick("Street")}>Street</NavLink></div>
          <div><NavLink to="/Documenting" onClick={() => handleClick("Documenting Traditions")}>Documenting Traditions</NavLink></div>
          <div><NavLink to="/Arts" onClick={() => handleClick("Fine Arts")}>Fine Arts</NavLink></div>
          <div><NavLink to="/Wildlife" onClick={() => handleClick("Wildlife")}>Wildlife</NavLink></div>
          <div><NavLink to="/Events" onClick={() => handleClick("Events")}>Events</NavLink></div>
          <div><NavLink to="/BwPics" onClick={() => handleClick("Black and White photos")}>Black and White photos</NavLink></div>
          <div><NavLink to="/Food" onClick={() => handleClick("Food")}>Food</NavLink></div>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;

