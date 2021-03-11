import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import setTodoAction from "../../redux/actionCreators/setTodoAction";
import deleteAction from "../../redux/actionCreators/deleteAction";
import editAction from "../../redux/actionCreators/editAction";
import getFromDBAction from '../../redux/actionCreators/getFromDBAction';
import Column from "../Column/Column";
import { Box } from "@material-ui/core";

export default function Main() {
  const dispatch = useDispatch();
  const todos = useSelector((store) =>
    store.filter((item) => item.type === "todo")
  );
  const inprogs = useSelector((store) =>
    store.filter((item) => item.type === "inProgress")
  );
  const dones = useSelector((store) =>
    store.filter((item) => item.type === "done")
  );
  const [todo, setTodo] = useState("");

  /* getFromDB */
  const getFromDB = async (event) => {
    await dispatch(getFromDBAction());
  };
  useEffect(()=> {getFromDB()}, [])

  /* save item */
  const [type, getType] = useState("");

  const handleKeyPress = async (event) => {
    if (todo && event.key === "Enter") {
      await dispatch(
        setTodoAction({
          name: todo,
          type: type,
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
  const variables = { todo, editId, editText };
  const funcs = {
    handleKeyPress,
    handleEdit,
    handleChangeEdited,
    handleSaveEdited,
    handleDelete,
    setTodo,
    getType,
  };
  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <Column
          title={"To Do"}
          type={"todo"}
          cards={todos}
          funcs={funcs}
          variables={variables}
        />
        <Column
          title={"In Progress"}
          type={"inProgress"}
          cards={inprogs}
          funcs={funcs}
          variables={variables}
        />
        <Column
          title={"Done"}
          type={"done"}
          cards={dones}
          funcs={funcs}
          variables={variables}
        />
      </Box>
    </>
  );
}
