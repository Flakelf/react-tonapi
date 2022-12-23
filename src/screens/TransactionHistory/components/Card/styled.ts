import styled from "styled-components";

export const Wrapper = styled.button`
  width: 640px;
  border-radius: 16px;
  background: #1c1c22;
  margin-bottom: 20px;
  padding: 20px;
  outline: none;
  border: none;
  cursor: pointer;

  color: #fff;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: white;
  outline: none;
  border: none;
  font-size: 18px;
  padding: 0;

  cursor: pointer;

  transition: color 0.4s;

  &:hover {
    color: #8181b1;
  }

  svg {
    margin-left: 12px;
  }
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
`;

export const TransactionType = styled.div`
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  background: rgb(14, 209, 14, 40%);
  color: #fff;

  &.red {
    background: rgb(229, 9, 39, 45%);
  }

  svg {
    margin-left: 6px;
  }
`;

export const MiddleRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Amount = styled.p`
  font-size: 18px;

  &.green {
    color: #38b529;
  }
`;

export const NFT = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NFTPreview = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

export const Divider = styled.div`
  width: calc(100% + 40px);
  height: 1px;
  margin-top: 20px;
  margin-left: -20px;
  background: #323470;
`;

export const BottomText = styled.p`
  margin-top: 14px;
  font-size: 14px;
  color: #706666;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Comment = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #706666;
  text-align: left;
`;
