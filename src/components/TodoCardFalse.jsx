import styled from "styled-components";

// 완료하기전 할일목록카드를 모아놓은  TodoCardFalse
export function TodoCardFalse(props) {
  function deleteTodoHandler(id) {
    const resultDelete = window.confirm("삭제하시겠습니까?");
    if (resultDelete) {
      alert("성공적으로 삭제되었습니다.");
      /*
        1. 삭제하려는 id값과  todoList 데이터id들을 비교해서
        2. 일치하지 않은 것만 존재하는 배열을 만든다. 
        3. 그리고 반영해야하므로  setTodoList에 한다. 
      */
      props.setTodoList(props.todoList.filter((todo) => todo.id !== id));
    } else {
      alert("삭제가 취소되었습니다.");
      return;
    }
  }

  function changeStateTodoHandler(id) {
    // 완료된 할일목록를 저장하는 변수  updatedTodoList
    const updatedTodoList = props.todoList.map((todo) => {
      /*
        1.  종료로 넘길 id값과  todoList들의 id값이 동일하다면 
        2.  시작과 종료를 판가름하는 isDone 값을 변경
        3.  반대로 없다면 todo을 반환한다. 
        */
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    const resultChange = window.confirm("변경하시겠습니까");
    if (resultChange === true) {
      alert("성공적으로 변경되었습니다.");
      // 변경하시겠습니까에 네로 답했으므로 반영하여 상태 변경
      props.setTodoList(updatedTodoList);
    } else {
      alert("취소 되었습니다.");
      return;
    }
  }
  return (
    <StFalseTodoItem key={props.todo.id}>
      <StFalseTodoBody>
        <StFalseLabel htmlFor="topic">주제</StFalseLabel> <br />
        <StFalseTodoText>{props.todo.topic}</StFalseTodoText>
        <StFalseLabel htmlFor="topicText">세부내용</StFalseLabel> <br />
        <StFalseTodoText>{props.todo.text}</StFalseTodoText>
      </StFalseTodoBody>

      <StFalseTodoOption>
        <StFalseButtonDelete
          type="button"
          onClick={() => deleteTodoHandler(props.todo.id)}
        >
          삭제
        </StFalseButtonDelete>
        <StFalseButtonVictory
          type="button"
          onClick={() => changeStateTodoHandler(props.todo.id)}
        >
          완료
        </StFalseButtonVictory>
      </StFalseTodoOption>
    </StFalseTodoItem>
  );
}

const StFalseTodoBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StFalseTodoItem = styled.figure`
  border-radius: 4px;
  border-color: #5c5c5c;
  box-shadow: 2px 2px 2px 2px #5c5c5c;
  margin: 40px;
  height: 200px;
  padding: 10px;
`;

const StFalseTodoText = styled.figcaption`
  padding: 0.625rem;
`;

const StFalseLabel = styled.label`
  padding: 0.625rem;
  color: #333333;
  font-weight: bolder;
`;

const StFalseTodoOption = styled.div`
  position: absolute;
  margin-left: 8rem;
`;

const StFalseButtonDelete = styled.button`
  margin-left: 2.5rem;

  background-color: #9b111e;
  color: #ffffff;
  border-color: #9b111e;

  &:hover {
    background-color: #810512;
    color: #ffffff;
    border-color: #810512;
    cursor: pointer;
  }
`;

const StFalseButtonVictory = styled.button`
  margin-left: 2.5rem;

  background-color: #2e8b57;
  color: #ffffff;
  border-color: #2e8b57;

  &:hover {
    background-color: #0b9748;
    color: #ffffff;
    border-color: #0b9748;
    cursor: pointer;
  }
`;
