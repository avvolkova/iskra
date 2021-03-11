import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import setTodoAction from "../../redux/actionCreators/setTodoAction";
import deleteAction from "../../redux/actionCreators/deleteAction";
import editAction from "../../redux/actionCreators/editAction";
import getFromDBAction from "../../redux/actionCreators/getFromDBAction";
import Column from "../Column/Column";
import { Box } from "@material-ui/core";
import { SORT_BY_DATE } from "../../redux/types/types";

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

  /* sort by date */
  const sortByDate = async () => {
    await dispatch({ type: SORT_BY_DATE });
  };

  return (
    <>
      <div className="sort-block">
        <span className="sort" onClick={() => sortByDate()}>
          По дате создания
        </span>
        <span className="sort">По приоритету</span>
      </div>
      <Box display="flex" justifyContent="space-around">
        <Column title={"To Do"} type={"todo"} cards={todos} />
        <Column title={"In Progress"} type={"inProgress"} cards={inprogs} />
        <Column title={"Done"} type={"done"} cards={dones} />
      </Box>
    </>
  );
}
