import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Use faSearch instead of faMagnifyingGlass

function SearchBar({setPhoto}) {
  function handleChange(e){
  setPhoto(e.target.value)
  }
  return (
    <div className='searchBar'>
      <form>
        <div className="searchContainer">
          <FontAwesomeIcon icon={faSearch} style={{ color: "#00000b" }} />
          <input
          onChange={handleChange}
            id="search"
            type='text'
            placeholder='Search...'
            className="searchInput"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
