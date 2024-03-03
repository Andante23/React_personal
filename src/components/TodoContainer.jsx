import { useState } from "react";
import { TodoInputForm } from "./TodoInputForm";
import { TodoCardList } from "./TodoCardList";

export function TodoContainer() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      topic: "하하하",
      text: "라라라",
      isDone: false,
    },
  ]);

  return (
    <>
      <TodoInputForm setTodoList={setTodoList} />
      <TodoCardList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
