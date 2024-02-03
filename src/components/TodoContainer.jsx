import { useState } from "react";
import { TodoInputForm } from "./TodoInputForm";
import { TodoCardListView } from "./TodoCardList";

export function TodoContainer() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      topic: "",
      text: "",
      isDone: false,
    },
  ]);

  return (
    <>
      <TodoInputForm setTodoList={setTodoList} />
      <TodoCardListView todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
