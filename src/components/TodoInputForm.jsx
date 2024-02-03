import { useState } from "react";

export function TodoInputForm(props) {
  const [inputTopic, setTopic] = useState("");
  const [inputTopicText, setTopicText] = useState("");

  function onChangeTopic(event) {
    setTopic(event.target.value);
  }

  function onChangeTopicText(event) {
    setTopicText(event.target.value);
  }

  function submitButtonForm(event) {
    event.preventDefault();

    if (inputTopic !== "" && inputTopicText !== "") {
      const resultSet = window.confirm("입력하시겠습니까");

      if (resultSet) {
        alert("등록되었습니다.");
        props.setTodoList((prevTodoList) => [
          ...prevTodoList,
          {
            id: crypto.randomUUID(),

            topic: inputTopic,
            topicText: inputTopicText,
            isDone: false,
          },
        ]);
      } else {
        alert("취소되었습니다.");
        return;
      }
    } else {
      alert("입력창을  채워주세요");
    }

    setTopic("");
    setTopicText("");
  }

  return (
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
          pattern="[0-9]+"
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
  );
}
