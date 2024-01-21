/**
   할일목록 상단 컴포넌트 
 */
export function TodoHead() {
  const topHeadTitle = "단테의 할일";
  return (
    <>
      <header className="todo_head">
        <h1 className="todo_head_title">{topHeadTitle}</h1>
      </header>
    </>
  );
}
