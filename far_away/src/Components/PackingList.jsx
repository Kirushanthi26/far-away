import React from "react";
import Item from "./Item";
import { useState } from "react";

const PackingList = ({ items, onDeleteItems, onToggleChange, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="bg-yellow-900 min-h-[76vh] p-5 grid content-between">
      <div>
        <h1 className="uppercase underline font-medium text-lg text-center text-white">
          Lists
        </h1>
        <ul className="grid grid-cols-4 gap-4 m-10 justify-items-center">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItems={onDeleteItems}
              onToggleChange={onToggleChange}
            />
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mx-3 rounded-3xl px-3 py-1 border-orange-950 bg-amber-100"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={onClearList}
          className="mx-3 rounded-3xl px-5 py-1 bg-teal-400 uppercase"
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
