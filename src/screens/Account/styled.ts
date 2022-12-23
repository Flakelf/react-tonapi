import styled from "styled-components";

import { Input, Button as _Button } from "../../components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 40px;
  margin-bottom: 12px;
`;

export const SubHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const AccountHashInput = styled(Input)`
  height: 40px;
  width: 600px;
  margin-bottom: 30px;
`;

export const Button = styled(_Button)``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
