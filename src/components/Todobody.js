// 할일목록의 몸통부분 생각하시면 됩니다.

// useState가 있어야 합니다.
import { useState } from "react";
import { TodoCardTrue } from "./TcardTrue";
import { TodoCardFalse } from "./TcardFasle";

/**
 * 할일목록 몸통 컴포넌트입니다.
 * @param {부모 컴포넌트인 App으로부터 받은 속성 } props
 * @returns
 */
export function TodoBody(props) {
  // console.log('props', props);
  const [inputTopic, setTopic] = useState("");
  const [inputTopicText, setTopicText] = useState("");

  function onChangeTopic(event) {
    setTopic(event.target.value);
    //console.log('할일제목',inputTopic);
  }

  function onChangeTopicText(event) {
    setTopicText(event.target.value);
    //console.log('할일세부내용' , inputTopicText);
  }

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
          <div className="todo_bar_option">
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

      {/* 
           props 내에 저장된 todoList 콘솔에서 배열로 뜬다.!!
           그래서 map으로 배열처리가 가능하다
           
        */}

      <section className="todoList_start">
        <h1>시작</h1>
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
        <h1>종료</h1>
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
    </>
  );
}
