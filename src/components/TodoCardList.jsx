import styled from "styled-components";
import { TodoCardFalse } from "./TodoCardFalse";
import { TodoCardTrue } from "./TodoCardTrue";

export function TodoCardList(props) {
  return (
    <>
      {/* 
            todoList 데이터 배열에서 필더링을 하여  todo.isDone만 담은 배열을 나타내는 로직
           */}

      <StCardListView>
        <StCardView>
          <StCardTitle>시작</StCardTitle>

          {props.todoList
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoCardFalse
                key={todo.id}
                todo={todo}
                todoList={props.todoList}
                setTodoList={props.setTodoList}
              />
            ))}
        </StCardView>

        <StCardView>
          <StCardTitle>종료</StCardTitle>
          {props.todoList
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoCardTrue
                key={todo.id}
                todo={todo}
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
  display: flex;
  justify-content: space-around;
`;

const StCardView = styled.section`
  margin: 10px;
  width: 400px;
  height: 400px;
`;

const StCardTitle = styled.h1`
  margin: 10px;
  color: #333333;
  font-weight: bolder;
  font-size: 40px;
`;
