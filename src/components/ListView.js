import React from "react";
import "./ListView.css";

export default function ListView({ todoList, onComplete, onRemove }) {
  return (
    <div className="listview">
      <ol>
        {todoList &&
          todoList.map((todo, index) => {
            return (
              <li
                key={todo.key}
                className={todo.isCompleted ? "" : "completed"}
              >
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
                  className="remove"
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
