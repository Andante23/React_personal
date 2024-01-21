//할일정보를 담은 카드의 isDone값이 false일  때 컴포넌트
export function TodoCardFalse(props) {
  function deleteButton(id) {
    props.setTodoList(props.todoList.filter((todo) => todo.id !== id));
    alert("정상적으로 삭제되었습니다.");
  }

  const toggleDone = (id) => {
    const updatedTodoList = props.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    props.setTodoList(updatedTodoList);
  };

  return (
    <figure className="todoList_card" key={props.todo.id}>
      <figcaption className="todoList_card_topic">
        {props.todo.topic}
      </figcaption>
      <figcaption className="todoList_card_topicText">
        {props.todo.topicText}
      </figcaption>
      <div className="todoList_card_option">
        {/* 
          1.  함수명(props.todo.id)를 하면 실행되는 것입니다.
          2.  () => { 내용 } 는   함수가 실행하면  ~~~ 이렇게 해줘라는 것입니다.  
        */}
        <button
          type="button"
          onClick={() => deleteButton(props.todo.id)}
          className="todoList_button_delete"
        >
          삭제
        </button>
        <button
          type="button"
          onClick={() => toggleDone(props.todo.id)}
          className="todoList_button_victory"
        >
          완료
        </button>
      </div>
    </figure>
  );
}

// 할일정보를 담은 카드의 isDone값이 false일  때 컴포넌트
export function TodoCardTrue(props) {
  function deleteButton(id) {
    props.setTodoList(props.todoList.filter((todo) => todo.id !== id));
  }

  const toggleDone = (id) => {
    const updatedTodoList = props.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    props.setTodoList(updatedTodoList);
  };

  return (
    <figure className="todoList_card" key={props.todo.id}>
      <figcaption className="todoList_card_topic">
        {props.todo.topic}
      </figcaption>
      <figcaption className="todoList_card_topicText">
        {props.todo.topicText}
      </figcaption>
      <div className="todoList_card_option">
        <button
          type="button"
          onClick={() => deleteButton(props.todo.id)}
          className="todoList_button_delete"
        >
          삭제
        </button>
        <button
          type="button"
          onClick={() => toggleDone(props.todo.id)}
          className="todoList_button_cancel"
        >
          취소
        </button>
      </div>
    </figure>
  );
}
