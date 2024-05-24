import React, { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import States from "./Components/States";
//import { initialItems } from "./assets/data.js";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((crrItems) => [...crrItems, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((crrItems) => crrItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((crrItem) =>
      crrItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleChange={handleToggleItem}
        onClearList={handleClearList}
      />
      <States items={items} />
    </div>
  );
};

export default App;
