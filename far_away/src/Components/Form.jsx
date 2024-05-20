import React, { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form
      className="text-center w-full flex justify-center items-center p-3 bg-orange-500"
      onSubmit={handleSubmit}
    >
      <h3 className="font-medium">What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="mx-3 rounded-3xl px-3 py-1 border-orange-950 bg-amber-100"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
        className="mx-3 rounded-3xl px-3 py-1 border-orange-950 bg-amber-100"
      />
      <button className="mx-3 rounded-3xl px-5 py-1 bg-teal-400 uppercase">
        Add
      </button>
    </form>
  );
};

export default Form;
