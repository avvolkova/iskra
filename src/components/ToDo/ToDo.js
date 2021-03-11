import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@material-ui/core";
import setTodoAction from "../../redux/actionCreators/setTodoAction";

import deleteAction from "../../redux/actionCreators/deleteAction";
import editAction from "../../redux/actionCreators/editAction";
import Card from '../Card/Card';

export default function ToDo() {
  const dispatch = useDispatch();
  const todos = useSelector((store) =>
    store.filter((item) => item.priority === "todo")
  );
  const [todo, setTodo] = useState("");

  /* save item */
  const handleKeyPress = async (event) => {
    if (todo && event.key === "Enter") {
      await dispatch(
        setTodoAction({
          name: todo,
          priority: "todo",
          createDate: new Date(),
          id: uuidv4(),
        })
      );
      setTodo("");
    }
  };

  /* edit */
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id) => {
    setEditId(id);
    setEditText(todos.find((todo) => todo.id === id).name);
  };

  const handleChangeEdited = ({ target }) => {
    setEditText(target.value);
  };

  const handleSaveEdited = async (event) => {
    if (event.key === "Enter") {
      await dispatch(editAction({ id: editId, name: editText }));
      setEditId(null);
    }
  };

  /* delete */
  const handleDelete = (id) => {
    dispatch(deleteAction(id));
  };

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
        todos.map(({ name, id }) => {
          return (
            <Card
              className="task-item"
              key={id}
              id={id}
              handleChangeEdited={handleChangeEdited}
              handleSaveEdited={handleSaveEdited}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              id={id}
              editId={editId}
              editText={editText}
              name={name}
            />
          );
        })}
    </div>
  );
}
