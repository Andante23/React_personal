import { useState } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

export function TodoInputForm(props) {
  const [inputTopic, setTopic] = useState("");
  const [inputTopicText, setTopicText] = useState("");

  function onChangeTopic(event) {
    setTopic(event.target.value);
  }

  function onChangeTopicText(event) {
    setTopicText(event.target.value);
  }

  function submitButtonFormHandler(event) {
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
            // 독립적인 id값을 부여하기 위해서 uuid 라이브러리를 이용합니다.!!!
            id: uuidv4(),

            topic: inputTopic,
            text: inputTopicText,
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

        <StButton type="submit" onClick={submitButtonFormHandler}>
          추가하기
        </StButton>
      </StForm>
    </StNav>
  );
}

const StNav = styled.nav`
  margin: auto;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
`;

const StInput = styled.input`
  width: 25rem;
  height: 2.5rem;
`;

const StTextArea = styled.textarea`
  width: 25rem;
  height: 25rem;
`;

const StButton = styled.button`
  border-radius: 4px;
  margin-top: 10px;
  height: 40px;

  background-color: #0077c2;
  color: #ffffff;
  border-color: #0077c2;
  &:hover {
    background-color: #00619a;
    color: #ffffff;
    border-color: #00619a;
    cursor: pointer;
  }
`;
