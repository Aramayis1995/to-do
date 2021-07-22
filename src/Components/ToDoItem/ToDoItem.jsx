import React from "react";

export default function ToDoItem({ text, id }) {
  return (
    <li>
      <p>{text}</p>
      <button type="button">Done</button>
      <button type="button">Edit</button>
      <button type="button">Delete</button>
    </li>
  );
}
