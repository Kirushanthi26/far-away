import React from "react";

const Item = ({ item }) => {
  return (
    <li className="flex">
      <h5
        className={`capitalize font-medium text-white mr-3 ${
          item.packed ? "line-through" : ""
        }`}
      >
        {item.quantity} {item.description}
      </h5>
      <button>❌</button>
    </li>
  );
};

export default Item;
