// 할일정보를 담은 카드의 isDone값이 false일  때 컴포넌트
export function TodoCardTrue(props) {
  function deleteButton(id) {
    props.setTodoList(props.todoList.filter((todo) => todo.id !== id));

    const resultDelete = window.confirm("삭제하시겠습니까?");
    if (resultDelete === true) {
      alert("성공적으로 삭제되었습니다.");
    }
  }

  function toggleDone(id) {
    const updatedTodoList = props.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    // 변경하시겠습니까라고 물어보는 것에 따른 로직 처리
    const resultChange = window.confirm("변경하시겠습니까");
    if (resultChange === true) {
      alert("성공적으로 삭제되었습니다.");
      // 리액트가 알아들어야 하니까  setTodoList에서  상태 바꿔주는 거  잊지 마십쇼
      props.setTodoList(updatedTodoList);
    } else if (resultChange === false) {
      alert("삭제가 안되었습니다.");
    }
  }

  return (
    // 리액트 공식문서에 따르면  key는 리액트가 어떤 항목을 변경 , 추가 , 또는  삭제할지를 알려주는 친구입니다.
    <figure className="todoList_card" key={props.todo.id}>
      <figcaption className="todoList_card_topic">
        {props.todo.topic}
      </figcaption>
      <figcaption className="todoList_card_topicText">
        {props.todo.topicText}
      </figcaption>
      <div className="todoList_card_option">
        {/* 
           함수명(props.todo.id)를 하지 맙시다
           생성과  동시에 투드리스트가 삭제되는 진풍경을 보실수 있습니다~~
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
          className="todoList_button_cancel"
        >
          취소
        </button>
      </div>
    </figure>
  );
}
