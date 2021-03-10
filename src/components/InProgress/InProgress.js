import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@material-ui/core";
import setTodoAction from "../../redux/actionCreators/setTodoAction";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function ToDo() {
  const dispatch = useDispatch();
  const inprogs = useSelector((store) =>
    store.filter((item) => item.priority === "inProgress")
  );
  const [inprog, setInprog] = useState("");
  const handleKeyPress = (event) => {
    if (inprog && event.key === "Enter") {
      dispatch(
        setTodoAction({
          name: inprog,
          priority: "inProgress",
          createDate: new Date(),
        })
      );
      setInprog("");
    }
  };

  return (
    <div className="task-list">
      In Progress
      <Input
        placeholder="Введите задачу"
        value={inprog}
        onInput={(e) => setInprog(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {inprogs.length >= 1 &&
        inprogs.map((item) => {
          return (
            <div className="task-item" key={uuidv4()}>
              {item.name}
              <EditIcon />
              <DeleteForeverIcon />
            </div>
          );
        })}
    </div>
  );
}
