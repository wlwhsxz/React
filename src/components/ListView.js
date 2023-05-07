import React from "react";

export default function ListView({ todoList, onComplete, onRemove }) {
  return (
    <div>
      <ol>
        {todoList &&
          todoList.map((todo, index) => {
            return (
              <li key={todo.key}>
                <span>{todo.value}</span>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof onComplete === "function") onComplete(index);
                  }}
                >
                  완료
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof onComplete === "function") onRemove(index);
                  }}
                >
                  삭제
                </button>
              </li>
            );
          })}
      </ol>
    </div>
  );
}
