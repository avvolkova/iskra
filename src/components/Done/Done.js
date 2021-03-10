import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@material-ui/core";
import setTodoAction from "../../redux/actionCreators/setTodoAction";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function Done() {
  const dispatch = useDispatch();
  const dones = useSelector((store) =>
    store.filter((item) => item.priority === "done")
  );
  const [done, setDone] = useState("");
  const handleKeyPress = (event) => {
    if (done && event.key === "Enter") {
      dispatch(
        setTodoAction({
          name: done,
          priority: "done",
          createDate: new Date(),
        })
      );
      setDone("");
    }
  };

  return (
    <div className="task-list">
      Done
      <Input
        placeholder="Введите задачу"
        value={done}
        onInput={(e) => setDone(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {dones.length >= 1 &&
        dones.map((done) => {
          return (
            <div className="task-item" key={uuidv4()}>
              {done.name}
              <EditIcon/>
              <DeleteForeverIcon/>
            </div>
          );
        })}
    </div>
  );
}
