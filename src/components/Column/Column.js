import React, { useState, useEffect } from "react";
import { Input } from "@material-ui/core";
import Card from "../Card/Card";

export default function Column({ type, title, cards, funcs, variables }) {
  useEffect(() => funcs.getType(type), []);

  return (
    <div className="task-list">
      {title}
      <Input
        placeholder="Введите задачу"
        value={variables.todo}
        onInput={(e) => funcs.setTodo(e.target.value)}
        onKeyPress={funcs.handleKeyPress}
      />
      {cards.length >= 1 &&
        cards.map(({ name, id }) => {
          return (
            <Card
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
