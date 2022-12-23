import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 50px;
`;

const NotFound = () => (
  <Wrapper>
    <Header>404 Not Found :(</Header>
  </Wrapper>
);

export { NotFound };
