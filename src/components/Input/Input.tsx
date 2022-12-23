import { InputHTMLAttributes } from "react";

import styled from "styled-components";

const Wrapper = styled.div``;

const Control = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 12px;
  padding: 2px 20px;
  font-size: 20px;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <Wrapper className={className}>
    <Control {...props} />
  </Wrapper>
);

export { Input };
