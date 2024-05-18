import React from "react";

const Form = () => {
  return (
    <form className="text-center w-full flex justify-center items-center p-3 bg-orange-500">
      <h3 className="font-medium">What do you need for your 😍 trip?</h3>
      <select className="mx-3 rounded-3xl px-3 py-1 border-orange-950 bg-amber-100">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value="num" key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="itemName"
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
