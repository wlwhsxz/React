import React, { useState } from "react";

export default function InsertForm({ onInsert }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onInsert === "function") onInsert(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
}
