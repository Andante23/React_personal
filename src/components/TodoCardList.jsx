import { TodoCardFalse } from "./TodoCardFalse";
import { TodoCardTrue } from "./TodoCardTrue";

export function TodoCardListView(props) {
  return (
    <>
      <div className="todoListView">
        <section className="todoList_start">
          <h1 className="todoList_start_title">시작</h1>
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
        </section>

        <section className="todoList_end">
          <h1 className="todoList_end_title">종료</h1>
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
        </section>
      </div>
    </>
  );
}
