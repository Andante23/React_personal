import styled from "styled-components";

export function TodoCardFalse(props) {
  function deleteButton(id) {
    const resultDelete = window.confirm("삭제하시겠습니까?");
    if (resultDelete === true) {
      alert("성공적으로 삭제되었습니다.");
      props.setTodoList(props.todoList.filter((todo) => todo.id !== id));
    } else {
      alert("삭제가 취소되었습니다.");
      return;
    }
  }

  function toggleDone(id) {
    const updatedTodoList = props.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    const resultChange = window.confirm("변경하시겠습니까");
    if (resultChange === true) {
      alert("성공적으로 변경되었습니다.");

      props.setTodoList(updatedTodoList);
    } else {
      alert("취소 되었습니다.");
      return;
    }
  }
  return (
    <StFalseTodoItem key={props.todo.id}>
      <StFalseLabel htmlFor="topic">주제</StFalseLabel> <br />
      <StFalseTodoData>{props.todo.topic}</StFalseTodoData>
      <StFalseLabel htmlFor="topicText">세부내용</StFalseLabel> <br />
      <StFalseTodoData>{props.todo.topicText}</StFalseTodoData>
      <StFalseTodoOption>
        <StFalseButtonDelete
          type="button"
          onClick={() => deleteButton(props.todo.id)}
        >
          삭제
        </StFalseButtonDelete>
        <StFalseButtonVictory
          type="button"
          onClick={() => toggleDone(props.todo.id)}
        >
          완료
        </StFalseButtonVictory>
      </StFalseTodoOption>
    </StFalseTodoItem>
  );
}

const StFalseTodoItem = styled.figure`
  margin: 10px;
  background-color: lightblue;
  border-radius: 10px;
`;

const StFalseTodoData = styled.figcaption`
  margin: 20px;
  padding: 10px;
  font-weight: 600;
  background-color: aliceblue;
  border-radius: 10px;
`;

const StFalseLabel = styled.label`
  margin: auto;
  color: black;
  font-weight: bolder;
`;

const StFalseTodoOption = styled.div`
  padding-left: 400px;
`;

const StFalseButtonDelete = styled.button`
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  border-color: #ee030b;
  color: #ffffff;
  background-color: #ee030b;

  &:hover {
    background-color: #c2060c;
    border-color: #c2060c;
  }
`;

const StFalseButtonVictory = styled.button`
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  border-color: #08c055;
  color: #ffffff;
  background-color: #08c055;

  &:hover {
    background-color: #06a849;
    border-color: #06a849;
  }
`;
