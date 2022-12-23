import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { API } from "../../service/API";

import { ERROR_BY_CODE } from "../../constants/APIErrorMapping";

import {
  Wrapper,
  Header,
  SubHeader,
  AccountHashInput,
  Button,
  Form,
} from "./styled";

const Account = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const checkAccountAndRedirect = async () => {
    try {
      await API.get("/account/getInfo?account=" + inputValue);

      navigate(`/account/${inputValue}`);
    } catch (e) {
      console.log(e);

      if (e instanceof AxiosError && e.response) {
        const errorText =
          ERROR_BY_CODE[e.response.status] || "Some unknown error occured";

        toast.error(errorText);
      }
    }
  };

  return (
    <Wrapper>
      {pathname !== "/" && (
        <Header>It seems your forgot to add /account/:address in route</Header>
      )}

      <SubHeader>
        Please fill text field below with account address transaction history
        you want to check or pass it directly in browser address field (for
        example /account/0:BA60BFBD527C0CD2D70C...)
      </SubHeader>

      <Form onSubmit={(e) => e.preventDefault()}>
        <AccountHashInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Fill this field with account address"
        />

        <Button
          type="submit"
          disabled={!inputValue}
          onClick={checkAccountAndRedirect}
        >
          Find transactions
        </Button>
      </Form>
    </Wrapper>
  );
};

export { Account };
