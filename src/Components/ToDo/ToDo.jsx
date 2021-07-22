import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentText: "",
    };
  }

  updateCurrentText = (e) => {
    this.setState({ currentText: e.target.value });
  };

  addItem = (e) => {
    if (e.key === "Enter") {
      const text = e.target.value;
      this.setState((prevState) => {
        return { items: [...prevState.items, { text }], currentText: "" };
      });
    }
  };

  addItemV2 = (e) => {
    const text = this.state.currentText;
    this.setState((prevState) => {
      return { items: [...prevState.items, { text }], currentText: "" };
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <input
          value={this.state.currentText}
          onChange={this.updateCurrentText}
          onKeyPress={this.addItem}
          type="text"
          placeholder="write..."
        />
        <button onClick={this.addItemV2}>Add</button>

        <ul>
          {items.map((el) => {
            return <ToDoItem text={el.text} />;
          })}
        </ul>
      </div>
    );
  }
}
