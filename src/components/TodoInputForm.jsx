import { useState } from "react";
import { styled } from "styled-components";
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
    // submit 버튼의 기본 기능 방지
    event.preventDefault();

    // 공백("") , 스페이스로 만들음("   ") 로 받은 입력값이 들어왔을 때 / 안들어왔을 때  대처 로직
    if (inputTopic.trim() !== "" && inputTopicText.trim() !== "") {
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

    // 폼 입력받는 부분을 리셋
    setTopic("");
    setTopicText("");
  }

  return (
    <StNav>
      <StForm>
        <StInput
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
        <StTextArea
          name="topic_text"
          type="text"
          placeholder="세부내용을 입력해주세요"
          value={inputTopicText}
          onChange={onChangeTopicText}
          min="10"
          max="50"
          required
        />

        <StButton type="submit" onClick={submitButtonForm}>
          추가하기
        </StButton>
      </StForm>
    </StNav>
  );
}

const StNav = styled.nav`
  margin: 1.875rem;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 1rem;
`;

const StInput = styled.input`
  width: 400px;
  border-radius: 5px;
  padding: 10px;
  border-color: none;
`;

const StTextArea = styled.textarea`
  margin: 0.625rem;
  width: 400px;
  border-radius: 4px;
  height: 300px;
`;

const StButton = styled.button`
  margin-left: 320px;
  margin-top: 20px;
  padding: 8px;
  border-radius: 10px;
  border-color: #034aee;
  color: #ffffff;
  background-color: #034aee;
  cursor: pointer;

  &:hover {
    background-color: #0535a5;
    border-color: #0535a5;
  }
`;
