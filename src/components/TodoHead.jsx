import { styled } from "styled-components";
export function TodoHead() {
  const topHeadTitle = "단테의 할일";

  return (
    <>
      <StHeader>
        <StTitle>{topHeadTitle}</StTitle>
      </StHeader>
    </>
  );
}

const StHeader = styled.header`
  text-align: center;
`;

const StTitle = styled.h1`
  margin: 10px;
  font-size: 26px;
  font-weight: 600;
`;
