import React from 'react';
import './Search.css';

function Searchbar({ value, onChange }) {
  return (
    <div className=' '> 
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="search-bar btn "
    /></div>
  );
}

export default Searchbar;
