//할일정보를 담은 카드의 isDone값이 false일  때 컴포넌트
export function TodoCardFalse(props) {
  /**
   *  등록되어있는  투트리스트를 제거해주는  deleteButton 함수
   * @param {todoList에서 제가 추가해주었던 id } id
   */
  function deleteButton(id) {
    props.setTodoList(props.todoList.filter((todo) => todo.id !== id));

    // 삭제하시겠습니까라고 물어보는  것에 따른  로직 처리
    const resultDelete = window.confirm("삭제하시겠습니까?");
    if (resultDelete === true) {
      alert("성공적으로 삭제되었습니다.");
    } else {
      alert("삭제가 안되었습니다.");
    }
  }

  function toggleDone(id) {
    const updatedTodoList = props.todoList.map((item) => {
      if (item.id === id) {
        // 상태 바꾸려는 id값이 일치하다면
        // 상태변수 isDone을 바꾸어줍시다.
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    // 리액트가 알아들어야 하니까  setTodoList에서  상태 바꿔주는 거  잊지 마십쇼
    props.setTodoList(updatedTodoList);

    // 변경하시겠습니까라고 물어보는 것에 따른 로직 처리
    const resultChange = window.confirm("변경하시겠습니까");
    if (resultChange === true) {
      alert("성공적으로 삭제되었습니다.");
    } else if (resultChange === false) {
      alert("삭제가 안되었습니다.");
    }
  }

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
         함수명(props.todo.id)를 하면 실행되는 것입니다.
         여러분 할일목록 추가하는  동시에 삭제됩니다.
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

  function toggleDone(id) {
    const updatedTodoList = props.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    // 리액트가 알아들어야 하니까  setTodoList에서  상태 바꿔주는 거  잊지 마십쇼
    props.setTodoList(updatedTodoList);
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
