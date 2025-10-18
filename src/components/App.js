import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import Item from "./Item";

function App() {
  const [items, setItems] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("")

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleCategoryChange(event) {
    setItems(event.target.value)
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = 
      items === "All" || item.category === setItems;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
    
  })
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
      <Filter 
      search={search}
      onSearchChange={handleSearchChange}
      onCategoryChange={handleCategoryChange}/>
      <Item items={itemsToDisplay}/>
    </div>
  );
}

export default App;

