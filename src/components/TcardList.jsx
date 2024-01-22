import { TodoCardFalse } from "./TcardFalse";
import { TodoCardTrue } from "./TcardTrue";

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
