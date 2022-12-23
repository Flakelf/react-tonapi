import { ButtonHTMLAttributes } from "react";

import styled from "styled-components";

const Wrapper = styled.div``;

const Control = styled.button`
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 8px 20px;
  background: rgb(75, 86, 96);
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled) {
    &:hover {
      background: rgb(76, 100, 122);
    }
  }

  transition: background 0.4s;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Wrapper className={className}>
      <Control {...props} />
    </Wrapper>
  );
};

export { Button };
