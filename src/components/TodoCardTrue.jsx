import { styled } from "styled-components";

export function TodoCardTrue(props) {
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
    <StTrueTodoItem>
      <StTrueLabel htmlFor="topic">주제</StTrueLabel> <br />
      <StTrueTodoData>{props.todo.topic}</StTrueTodoData>
      <StTrueLabel htmlFor="topicText">세부내용</StTrueLabel> <br />
      <StTrueTodoData>{props.todo.topicText}</StTrueTodoData>
      <StTrueTodoOption>
        <StTrueButtonDelete
          type="button"
          onClick={() => deleteButton(props.todo.id)}
        >
          삭제
        </StTrueButtonDelete>
        <StFalseButtonCancel
          type="button"
          onClick={() => toggleDone(props.todo.id)}
        >
          취소
        </StFalseButtonCancel>
      </StTrueTodoOption>
    </StTrueTodoItem>
  );
}

const StTrueTodoItem = styled.figure`
  margin: 10px;
  background-color: lightblue;
  border-radius: 10px;
`;

const StTrueTodoData = styled.figcaption`
  margin: 20px;
  padding: 10px;
  font-weight: 600;
  background-color: aliceblue;
  border-radius: 10px;
`;

const StTrueLabel = styled.label`
  margin: auto;
  color: black;
  font-weight: bolder;
`;

const StTrueTodoOption = styled.div`
  padding-left: 400px;
`;

const StTrueButtonDelete = styled.button`
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

const StFalseButtonCancel = styled.button`
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  border-color: #131314;
  color: #ffffff;
  background-color: #131314;
  cursor: pointer;

  &:hover {
    background-color: #1e1e1f;
    border-color: #1e1e1f;
  }
`;
