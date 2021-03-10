import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@material-ui/core";
import setTodoAction from "../../redux/actionCreators/setTodoAction";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function ToDo() {
  const dispatch = useDispatch();
  const todos = useSelector((store) =>
    store.filter((item) => item.priority === "todo")
  );
  const [todo, setTodo] = useState("");

  const handleKeyPress = (event) => {
    if (todo && event.key === "Enter") {
      dispatch(
        setTodoAction({
          name: todo,
          priority: "todo",
          createDate: new Date(),
        })
      );
      setTodo("");
    }
  };

  /* edit */

  /* delete */


  return (
    <div className="task-list">
      To Do
      <Input
        placeholder="Введите задачу"
        value={todo}
        onInput={(e) => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {todos.length >= 1 &&
        todos.map((todo) => {
          return (
            <div className="task-item" id={uuidv4()} key={uuidv4()}>
              {todo.name}
              <EditIcon />
              <DeleteForeverIcon
              />
            </div>
          );
        })}
    </div>
  );
}
