// 할일목록의 몸통부분 생각하시면 됩니다.

// useState가 있어야 합니다.
import { useState } from "react";

import { TodoCardFalse, TodoCardTrue } from "./Tcard";

/**
 * 할일목록 몸통 컴포넌트입니다.
 * @param {부모 컴포넌트인 App으로부터 받은 속성 } props
 * @returns
 */
export function TodoBody(props) {
  // console.log('props', props);
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
    // 부모 App 컴포넌트로부터 전달받은 props이용

    // 주제와 세부내용이  입력되어야지만 가능하다.
    if (inputTopic !== "" && inputTopicText !== "") {
      props.setTodoList((prevTodoList) => [
        ...prevTodoList,
        {
          id: prevTodoList.length + 1,
          topic: inputTopic,
          topicText: inputTopicText,
          isDone: false,
        },
      ]);

      // 입력이 된다면  성공적으로 입력되었습니다. 창이 나옵니다.
      alert("성공적으로 입력되었습니다.");
    }

    // console.log(props.todoList);  데이터 잘 들어가는지 확인

    // Topic 과 TopicText 인풋 리셋
    setTopic("");
    setTopicText("");
  }

  return (
    <>
      <nav className="todo_input_bar">
        <form className="todo_inputForm">
          <div className="todo_inputForm_Elements">
            <input
              className="todo_inputForm_input_topic"
              name="topic_title"
              type="text"
              placeholder="주제를 입력해주세요"
              value={inputTopic}
              onChange={onChangeTopic}
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
              required
            />

            <button
              className="todo_input_submit"
              type="submit"
              onClick={submitButtonForm}
            >
              추가하기
            </button>
          </div>
        </form>
      </nav>

      <div className="todoListView">
        <section className="todoList_start">
          <h1 className="todoList_start_title">시작</h1>
          {/*  
            props.todoList내의  TodoList 데이터를  TodoCard내부에 집어넣어 준다!!!          
            todoList는 여러개이므로  반복을 도와줄  map  메소드를 이용한다. 
         */}
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
          <h1 className="todoList_start_title">종료</h1>
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
