import React, { useState } from "react";
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleInsert = (value) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList.push({
        key: new Date().getTime(),
        value: value,
        isCompleted: false,
      });
      return newTodoList;
    });
  };

  const handleComplete = (index) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
      return newTodoList;
    });
  };

  const handleRemove = (index) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList.splice(index, 1);
      return newTodoList;
    });
  };

  return (
    <div className="App">
      <ListView
        todoList={todoList}
        onComplete={handleComplete}
        onRemove={handleRemove}
      />
      <InsertForm onInsert={handleInsert} />
    </div>
  );
}

export default App;
