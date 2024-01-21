import { useState } from "react";
import "./CSS/App.css";
import { TodoHead } from "./components/Thead.jsx";
import { TodoBody } from "./components/Tbody.jsx";

/*
   부모 컴포넌트 App 
 */
function App() {
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
      <TodoHead />
      {/*  사용자로부터 입력폼에서  타이핑으로 입력받은 데이터인  topic 과 text를 저장하기 위해  props를 하였습니다.*/}
      <TodoBody todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
