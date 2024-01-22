import { useState } from "react";

export function TodoInputForm(props) {
  const [inputTopic, setTopic] = useState("");
  const [inputTopicText, setTopicText] = useState("");

  //   console.log(props);
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

      // 0  1 4  4

      const resultSet = window.confirm("입력하시겠습니까");
      // 입력하시겠습니까의 답이  참이면  등록됩니다.
      if (resultSet) {
        alert("등록되었습니다.");
        props.setTodoList((prevTodoList) => [
          ...prevTodoList,
          {
            id: Date.now(), // 수만명.... Uid

            // topic , topicText 값을  state에 저장되는 값으로 뿌려주자

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
      // 54 : 입력을 하지 않고 그러는 사람이 있다면  입력창을 채워주세요  메세지가  갑니다~~~~
      alert("입력창을  채워주세요");
    }

    // 위의  if문이 종료되면 Topic과 Text를  리셋합시다.
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
