import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import deleteAction from "../../redux/actionCreators/deleteAction";
import editAction from "../../redux/actionCreators/editAction";
import priorityAction from '../../redux/actionCreators/priorityAction';
import { Input } from "@material-ui/core";

const Card = ({ cards, id, name, date, priority }) => {
  const dispatch = useDispatch();

  /* edit */
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id) => {
    setEditId(id);
    setEditText(cards.find((todo) => todo.id === id).name);
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
  const handleDelete = async (id) => {
    await dispatch(deleteAction(id));
  };

  /* toggle priority */
  const togglePriority = async () => {
    await dispatch(priorityAction(id))
  };

  return (
    <div className="task-item">
      <div className="task-item-text">
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
      </div>
      <div
        title="Priority"
        className={`priority ${priority ? "red" : ""}`}
        onClick={togglePriority}
      ></div>
      <div className="time">{date}</div>
      <div className="btns">
        <EditIcon onClick={() => handleEdit(id)} />
        <DeleteForeverIcon onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
};

export default Card;
