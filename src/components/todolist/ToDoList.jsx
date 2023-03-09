import React, { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(null);

  // -------handle change-------//
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // -----------add button-------------//
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  //----------delete------//
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // ---------after edit------------//
  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // -------edit------------//

  const handleEditTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    setEditMode(null);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            {editMode === index ? (
              <div className="edit-todo">
                <input type="text" defaultValue={todo.text} />
                <button
                  onClick={(e) =>
                    handleEditTodo(index, e.target.previousSibling.value)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => setEditMode(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="todo">
                <span onClick={() => handleToggleComplete(index)}>
                  {todo.text}
                </span>
                <div>
                  <button
                    className="edit-button"
                    onClick={() => setEditMode(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
