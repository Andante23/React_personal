import styled from "styled-components";
import { TodoCardFalse } from "./TodoCardFalse";
import { TodoCardTrue } from "./TodoCardTrue";

export function TodoCardListView(props) {
  return (
    <>
      {/* 
            todoList 데이터 배열에서 필더링을 하여  tD.isDone만 담은 배열을 나타내는 로직
           */}

      <StCardListView>
        <StCardView>
          <StCardTitle>시작</StCardTitle>

          {props.todoList
            .filter((tD) => !tD.isDone)
            .map((tD) => (
              <TodoCardFalse
                key={tD.id}
                todo={tD}
                todoList={props.todoList}
                setTodoList={props.setTodoList}
              />
            ))}
        </StCardView>

        <StCardView>
          <StCardTitle>종료</StCardTitle>
          {props.todoList
            .filter((tD) => tD.isDone)
            .map((tD) => (
              <TodoCardTrue
                key={tD.id}
                todo={tD}
                todoList={props.todoList}
                setTodoList={props.setTodoList}
              />
            ))}
        </StCardView>
      </StCardListView>
    </>
  );
}

const StCardListView = styled.div`
  height: 1400px;
  margin: 40px;
  display: flex;
`;

const StCardView = styled.section`
  background-color: #fbf9f9ed;
  margin: 10px;
  width: 700px;
  padding: 90px;
  border-radius: 10px;
`;

const StCardTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: black;
`;
