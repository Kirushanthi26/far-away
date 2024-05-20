import React, { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import States from "./Components/States";
import { initialItems } from "./assets/data.js";

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems((crrItems) => [...crrItems, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((crrItems) => crrItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} />
      <States />
    </div>
  );
};

export default App;
