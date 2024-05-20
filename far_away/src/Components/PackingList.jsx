import React from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItems, onToggleChange }) => {
  return (
    <div className="bg-yellow-900 min-h-[76vh] p-5">
      <h1 className="uppercase underline font-medium text-lg text-center text-white">
        Lists
      </h1>
      <ul className="grid grid-cols-4 gap-4 m-10 justify-items-center">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleChange={onToggleChange}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
