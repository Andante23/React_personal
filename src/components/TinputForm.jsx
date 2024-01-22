export function TodoInputForm(props) {
  console.log(props);

  return (
    <nav className="todo_input_bar">
      <form className="todo_inputForm">
        <input
          className="todo_inputForm_input_topic"
          name="topic_title"
          type="text"
          placeholder="주제를 입력해주세요"
          value={props.inputTopic}
          onChange={props.onChangeTopic}
          min="10"
          max="50"
          required
        />
        <br></br>
        <input
          className="todo_inputForm_input_topic_text"
          name="topic_text"
          type="text"
          placeholder="세부내용을 입력해주세요"
          value={props.inputTopicText}
          onChange={props.onChangeTopicText}
          min="10"
          max="50"
          required
        />

        <button
          className="todo_inputForm_submit"
          type="submit"
          onClick={props.submitButtonForm}
        >
          추가하기
        </button>
      </form>
    </nav>
  );
}
