import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@material-ui/core";
import setTodoAction from "../../redux/actionCreators/setTodoAction";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Card from "../Card/Card";


export default function InProgress({ inprogs, funcs, variables }) {
  useEffect(() => funcs.getType("inProgress"), []);

  return (
    <div className="task-list">
      In Progress
      <Input
        placeholder="Введите задачу"
        value={variables.todo}
        onInput={(e) => funcs.setTodo(e.target.value)}
        onKeyPress={funcs.handleKeyPress}
      />
      {inprogs.length >= 1 &&
        inprogs.map(({ name, id }) => {
          return (
            <Card
              className="task-item"
              key={id}
              id={id}
              funcs={funcs}
              name={name}
              variables={variables}
            />
          );
        })}
    </div>
  );
}
