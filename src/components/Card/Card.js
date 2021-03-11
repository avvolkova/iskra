import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Input } from "@material-ui/core";


const Card = ({
  handleChangeEdited,
  handleSaveEdited,
  handleEdit,
  handleDelete, id, name, editId, editText
}) => {
  return (
    <div>
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
};
 
export default Card;
