//할일정보를 담은 카드의 isDone값이 false일  때 컴포넌트
export function TodoCardFalse(props) {
  console.log("TodoCardFalse props", props);
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
    <div className="todoList_False_card" key={props.todo.id}>
      <div>{props.todo.topic}</div>
      <div>{props.todo.topicText}</div>
      <button type="button" onClick={() => deleteButton(props.todo.id)}>
        삭제
      </button>
      <button type="button" onClick={() => toggleDone(props.todo.id)}>
        완료
      </button>
    </div>
  );
}
