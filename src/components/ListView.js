import React from "react";

export default function ListView({ todoList }) {
  return (
    <div>
      <ol>
        {todoList &&
          todoList.map((todo) => {
            return (
              <li key={todo.key}>
                <span>{todo.value}</span>
                <button type="button">완료</button>
                <button type="button">삭제</button>
              </li>
            );
          })}
      </ol>
    </div>
  );
}
