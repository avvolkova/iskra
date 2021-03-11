import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Input } from "@material-ui/core";


const Card = ({ funcs, variables, id, name, 
}) => {
  return (
    <div className="task-item">
      {variables.editId && variables.editId === id ? (
        <Input
          type="text"
          autoFocus={true}
          onChange={(e) => funcs.handleChangeEdited(e)}
          onKeyPress={(e) => funcs.handleSaveEdited(e)}
          value={variables.editText}
        />
      ) : (
        <span>{name}</span>
      )}
      <EditIcon onClick={() => funcs.handleEdit(id)} />
      <DeleteForeverIcon onClick={() => funcs.handleDelete(id)} />
    </div>
  );
};
 
export default Card;
