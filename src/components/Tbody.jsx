// 할일목록의 몸통부분 생각하시면 됩니다.

//  13 , 14번째 줄에서 상태 관리가 되고있으므로  도와줄 useState가 필요합니다.
import { useState } from "react";

import { TodoCardFalse, TodoCardTrue } from "./Tcard";

/**
 * 할일목록 몸통 컴포넌트입니다.
 * @param {부모 컴포넌트인 App으로부터 받은 속성 } props
 */
export function TodoBody(props) {
  const [inputTopic, setTopic] = useState("");
  const [inputTopicText, setTopicText] = useState("");

  /* 사용자가 타이핑한 Topic 데이터를  받는 함수*/
  function onChangeTopic(event) {
    setTopic(event.target.value);
    //console.log('topic',inputTopic);
  }

  /* 사용자가 타이핑한 Topic 세부내용 데이터를 받는 함수 */
  function onChangeTopicText(event) {
    setTopicText(event.target.value);
    //console.log('text' , inputTopicText);
  }

  /* nav태그 바로 아래 form 부분을 제출하는 함수  */
  function submitButtonForm(event) {
    // 기본 기능 비활성화
    event.preventDefault();

    // 주제와 세부내용이  입력되어야지만  등록이 가능하다
    if (inputTopic !== "" && inputTopicText !== "") {
      // 부모 App 컴포넌트로부터 전달받은 props이용
      // prevTodoList : 이 submitButtonForm함수에서 입력값을
      // 저장하기 이전에 있었던  값!!!
      props.setTodoList((prevTodoList) => [
        ...prevTodoList,
        {
          id: prevTodoList.length + 1,
          // topic , topicText 값을  state에 저장되는 값으로 뿌려주자

          topic: inputTopic,
          topicText: inputTopicText,
          isDone: false,
        },
      ]);

      // 51 : 입력이 된다면  성공적으로 입력되었습니다. 창이 나옵니다.
      alert("성공적으로 입력되었습니다.");
    } else {
      // 54 : 입력을 하지 않고 그러는 사람이 있다면  입력창을 채워주세요가
      alert("입력창을  채워주세요");
    }

    // Topic 과 TopicText 인풋 리셋
    setTopic("");
    setTopicText("");
  }

  return (
    <>
      <nav className="todo_input_bar">
        <form className="todo_inputForm">
          <input
            className="todo_inputForm_input_topic"
            name="topic_title"
            type="text"
            placeholder="주제를 입력해주세요"
            value={inputTopic}
            onChange={onChangeTopic}
            min="10"
            max="50"
            required
          />
          <br></br>
          <input
            className="todo_inputForm_input_topic_text"
            name="topic_text"
            type="text"
            placeholder="세부내용을 입력해주세요"
            value={inputTopicText}
            onChange={onChangeTopicText}
            min="10"
            max="50"
            required
          />

          <button
            className="todo_inputForm_submit"
            type="submit"
            onClick={submitButtonForm}
          >
            추가하기
          </button>
        </form>
      </nav>

      <div className="todoListView">
        <section className="todoList_start">
          <h1 className="todoList_start_title">시작</h1>
          {props.todoList.map((tD) =>
            tD.isDone === false ? (
              <TodoCardFalse
                todo={tD}
                todoList={props.todoList}
                setTodoList={props.setTodoList}
              />
            ) : null
          )}
        </section>

        <section className="todoList_end">
          <h1 className="todoList_end_title">종료</h1>
          {props.todoList.map((tD) =>
            tD.isDone === true ? (
              <TodoCardTrue
                todo={tD}
                todoList={props.todoList}
                setTodoList={props.setTodoList}
              />
            ) : null
          )}
        </section>
      </div>
    </>
  );
}
