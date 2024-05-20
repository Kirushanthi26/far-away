import React from "react";

const Item = ({ item, onDeleteItems }) => {
  return (
    <li className="flex">
      <h5
        className={`capitalize font-medium text-white mr-3 ${
          item.packed ? "line-through" : ""
        }`}
      >
        {item.quantity} {item.description}
      </h5>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item;
