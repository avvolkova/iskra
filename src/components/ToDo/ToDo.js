import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@material-ui/core";
import setTodoAction from "../../redux/actionCreators/setTodoAction";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import deleteAction from "../../redux/actionCreators/deleteAction";
import editAction from "../../redux/actionCreators/editAction";

export default function ToDo() {
  const dispatch = useDispatch();
  const todos = useSelector((store) =>
    store.filter((item) => item.priority === "todo")
  );
  const [todo, setTodo] = useState("");

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
            <div className="task-item" key={id} id={id}>
              {editId && editId === id ? (
                <Input
                  type="text"
                  autoFocus={true}
                  onChange={(e) => handleChangeEdited(e)}
                  onKeyPress={(e) => handleSaveEdited(e)}
                  value={editText}
                />
              ) : (
                <span>{name}</span>
              )}
              <EditIcon onClick={() => handleEdit(id)} />
              <DeleteForeverIcon onClick={() => handleDelete(id)} />
            </div>
          );
        })}
    </div>
  );
}
