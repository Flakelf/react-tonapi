import { useEffect } from "react";
import {
  TransactionsHistoryProvider,
  useTransactionHistory,
} from "../../contexts/TransactionsHistory";

import { Card } from "./components";

import { Wrapper, Header } from "./styled";

const TransactionHistory = () => {
  const { data, fetchNextPage } = useTransactionHistory();

  useEffect(() => {
    if (data.length > 0) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && fetchNextPage) {
          fetchNextPage();
        }
      });

      const allCards = document.querySelectorAll(".transaction-history-card");

      const lastCard = allCards[allCards.length - 1];

      intersectionObserver.observe(lastCard);

      return () => {
        intersectionObserver.unobserve(lastCard);
      };
    }
  }, [data, fetchNextPage]);

  return (
    <Wrapper>
      <Header>Transaction history</Header>

      {data.map((transaction, key) => (
        <Card
          className="transaction-history-card"
          key={transaction.type + transaction.timestamp + key}
          {...transaction}
        />
      ))}
    </Wrapper>
  );
};

const TransactionHistoryWithProvider = () => (
  <TransactionsHistoryProvider>
    <TransactionHistory />
  </TransactionsHistoryProvider>
);

export { TransactionHistoryWithProvider as TransactionHistory };
