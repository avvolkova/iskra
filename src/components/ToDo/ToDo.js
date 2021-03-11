import React, {useState, useEffect} from "react";
import { Input } from "@material-ui/core";
import Card from '../Card/Card';

export default function ToDo({todos, funcs, variables}) {
useEffect(()=> funcs.getType("todo"),[])

    return (
    <div className="task-list">
      To Do
      <Input
        placeholder="Введите задачу"
        value={variables.todo}
        onInput={(e) => funcs.setTodo(e.target.value)}
        onKeyPress={funcs.handleKeyPress}
      />
      {todos.length >= 1 &&
        todos.map(({ name, id }) => {
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
