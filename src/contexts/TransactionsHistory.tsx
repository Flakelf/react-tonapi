import { createContext, ReactNode, useContext } from "react";
import { useInfiniteQuery, InfiniteQueryObserverBaseResult } from "react-query";
import { useParams } from "react-router-dom";

import { Buffer } from "buffer";

import type { AxiosError } from "axios";

import { API } from "../service/API";

import { Event, FormattedEvent } from "../constants/types";

// This is one place in whole code repo where this fuck working
// and don't tell me "Buffer is not defined"
window.Buffer = Buffer;

export interface TransactionsHistory {
  data: FormattedEvent[];
  isLoading?: boolean;
  error?: AxiosError | null;
  fetchNextPage?: InfiniteQueryObserverBaseResult["fetchNextPage"];
}

export const TransactionsHistoryContext = createContext<TransactionsHistory>({
  data: [],
});

interface AccountEventsFetcherResponse {
  events: Event[];
  next_from: number;
}

const accountEventsFetcher =
  (account: string) =>
  async ({ pageParam }: { pageParam?: string }) => {
    const urlSearchParams = new URLSearchParams({ account, limit: "5" });

    if (pageParam) {
      urlSearchParams.append("beforeLt", pageParam);
    }

    const data = await API.get<AccountEventsFetcherResponse>(
      "/event/getAccountEvents?" + urlSearchParams
    );
    return data.data;
  };

export const TransactionsHistoryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { address } = useParams();

  const {
    isLoading,
    data: queryData,
    error,
    fetchNextPage,
  } = useInfiniteQuery<{ events: Event[]; next_from: number }, AxiosError>({
    queryKey: "accountEvents",
    queryFn: accountEventsFetcher(address!),
    getNextPageParam: (lastPage) => lastPage.next_from,
  });

  const USELESS_EVENTS = ["ContractDeploy", "Subscribe"];

  const data: FormattedEvent[] = queryData
    ? queryData.pages
        .map((page) => page.events)
        .flat()
        .map((event) =>
          event.actions.map((action) => ({
            type: action.type,
            ...action[action.type],
            simplePreview: action.simple_preview,
            timestamp: event.timestamp,
            fee: event.fee.total,
          }))
        )
        .flat()
        .filter((item) => !USELESS_EVENTS.includes(item.type))
    : [];

  return (
    <TransactionsHistoryContext.Provider
      value={{ isLoading, error, data, fetchNextPage }}
    >
      {children}
    </TransactionsHistoryContext.Provider>
  );
};

export const useTransactionHistory = () =>
  useContext(TransactionsHistoryContext);
