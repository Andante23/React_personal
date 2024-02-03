import { styled } from "styled-components";
export function TodoHead() {
  const topHeadTitle = "단테의 할일";

  return (
    <>
      <StHeader className="todo_head">
        <StTitle className="todo_head_title">{topHeadTitle}</StTitle>
      </StHeader>
    </>
  );
}

const StHeader = styled.header`
  margin: 1.25rem;
`;

const StTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
`;
