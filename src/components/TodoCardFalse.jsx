import styled from "styled-components";

// 완료하기전 할일목록카드를 모아놓은  TodoCardFalse
export function TodoCardFalse(props) {
  console.log(props.todoList);

  function deleteData(id) {
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

  function toggleDone(id) {
    // 완료된 할일목록를 저장하는 변수  updatedTodoList
    const updatedTodoList = props.todoList.map((item) => {
      /*
        1.  종료로 넘길 id값과  todoList들의 id값이 동일하다면 
        2.  시작과 종료를 판가름하는 isDone 값을 변경
        3.  반대로 없다면 item을 반환한다. 
        */
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
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
      <StFalseLabel htmlFor="topic">주제</StFalseLabel> <br />
      <StFalseTodoData>{props.todo.topic}</StFalseTodoData>
      <StFalseLabel htmlFor="topicText">세부내용</StFalseLabel> <br />
      <StFalseTodoData>{props.todo.text}</StFalseTodoData>
      <StFalseTodoOption>
        <StFalseButtonDelete
          type="button"
          onClick={() => deleteData(props.todo.id)}
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
