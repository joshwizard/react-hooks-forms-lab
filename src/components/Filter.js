import React, { useState } from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {

  function handleSearchInput(e) {
    onSearchChange(e.target.value)
  }

  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..." 
      value={search}
      onChange={handleSearchInput}/>
    
      <select name="filter" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
