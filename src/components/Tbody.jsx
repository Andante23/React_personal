// 할일목록의 몸통부분 생각하시면 됩니다.

//  13 , 14번째 줄에서 상태 관리가 되고있으므로  도와줄 useState가 필요합니다.
import { useState } from "react";
import { TodoInputForm } from "./TinputForm";
import { TodoCardListView } from "./TcardList";

/**
 * 할일목록 몸통 컴포넌트입니다.
 * @param {부모 컴포넌트인 App으로부터 받은 속성 } props
 */
export function TodoBody() {
  // toDOList는 여러 개가 들어가기 때문에 배열 state 선언
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
