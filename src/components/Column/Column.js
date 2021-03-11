import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@material-ui/core";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import setTodoAction from "../../redux/actionCreators/setTodoAction";

import getFromDBAction from "../../redux/actionCreators/getFromDBAction";

export default function Column({ type, title, cards }) {
  const dispatch = useDispatch();

  /* getFromDB */
  const getFromDB = async (event) => {
    await dispatch(getFromDBAction());
  };
  useEffect(() => {
    getFromDB();
  }, []);

  /* save item */
  const [todo, setTodo] = useState("");

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

  return (
    <div className="task-list">
      {title}
      <Input
        placeholder="Введите задачу"
        value={todo}
        onInput={(e) => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />
  
      {cards.length >= 1 &&
        cards.map(({ name, id, createDate }) => {
          return (
            <Card
              cards={cards}
              key={id}
              id={id}
              name={name}
              date={new Date(createDate).toLocaleString()}
            />
          );
        })}
    </div>
  );
}
