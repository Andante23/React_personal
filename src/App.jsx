import { useState } from "react";
import "./CSS/App.css";
import "./CSS/reset.css";
import { TodoHead } from "./components/Tohead.js";
import { TodoBody } from "./components/Todobody.js";

// 부모 :  App 컴포넌트
function App() {
  // toDOList는 여러 개가 들어가기 때문에 배열 state 선언
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <TodoHead />
      {/* ToInputForm에서는  타이핑으로 입력받은 데이터인  topic 과 text를 저장하기 위해  props를 하였습니다.  */}
      <TodoBody todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
