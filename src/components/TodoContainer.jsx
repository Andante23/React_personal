import { useState } from "react";
import { TodoInputForm } from "./TodoInputForm";
import { TodoCardListView } from "./TodoCardList";

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
      <TodoCardListView todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
