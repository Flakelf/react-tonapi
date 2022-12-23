import React, { useState } from "react";
import TonWeb from "tonweb";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { formatDistanceToNow } from "date-fns";

import type { AxiosError } from "axios";
import type { FormattedEvent, NFTData } from "../../../../constants/types";

import { truncateAddress } from "../../../../utils/truncateAddress";

import { ArrowRight, Copy, Transfer } from "../../../../ui/icons";

import { API } from "../../../../service/API";

import { Modal } from "../../../../components";

import { generateTransactionTypeTitle } from "./utils";
import { CardModal } from "./components";

import {
  Wrapper,
  CopyButton,
  Top,
  Middle,
  TransactionType,
  MiddleRight,
  Amount,
  NFT,
  NFTPreview,
  Divider,
  BottomText,
  Bottom,
  Comment,
} from "./styled";

interface NFTFetcherResponse {
  nft_items: NFTData[];
}

const NFTFetcher = (NFTAddress: string) => () =>
  API.get<NFTFetcherResponse>(
    "/nft/getItems?" + new URLSearchParams({ addresses: NFTAddress })
  ).then((data) => data.data.nft_items[0]);

interface CardProps extends FormattedEvent {
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const {
    type,
    recipient,
    sender,
    amount,
    nft,
    fee,
    timestamp,
    comment,
    jetton,
    className,
  } = props;

  const { address } = useParams();
  const [isModalOpened, setModalOpened] = useState(false);

  const { data: NFTData } = useQuery<NFTData, AxiosError>(
    nft || "",
    NFTFetcher(nft!),
    { enabled: !!nft }
  );

  const onCopyButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    const {
      currentTarget: {
        dataset: { address },
      },
    } = e;

    navigator.clipboard.writeText(address!);

    toast.success(`Address ${truncateAddress(address!)} copied to clipboard!`);
  };

  const formattedSenderAddress = new TonWeb.utils.Address(
    sender.address
  ).toString(true, true, true);

  const formattedRecipientAddress = new TonWeb.utils.Address(
    recipient.address
  ).toString(true, true, true);

  const isRecipientEqualQueryAddress = formattedRecipientAddress !== address;

  const transactionTypeTitle = generateTransactionTypeTitle(
    type,
    isRecipientEqualQueryAddress
  );

  return (
    <>
      <Wrapper onClick={() => setModalOpened(true)} className={className}>
        <Top>
          <CopyButton
            data-address={formattedSenderAddress}
            onClick={onCopyButtonClick}
          >
            {truncateAddress(formattedSenderAddress)}
            <Copy />
          </CopyButton>

          <ArrowRight />

          <CopyButton
            data-address={formattedRecipientAddress}
            onClick={onCopyButtonClick}
          >
            {truncateAddress(formattedRecipientAddress)}
            <Copy />
          </CopyButton>
        </Top>

        <Middle>
          <TransactionType
            className={isRecipientEqualQueryAddress ? "red" : ""}
          >
            {transactionTypeTitle}
            <Transfer />
          </TransactionType>

          <MiddleRight>
            {type === "TonTransfer" && (
              <Amount className={!isRecipientEqualQueryAddress ? "green" : ""}>
                {isRecipientEqualQueryAddress ? "-" : "+"}
                {TonWeb.utils.fromNano(String(amount))} TON
              </Amount>
            )}

            {type === "JettonTransfer" && (
              <Amount className={!isRecipientEqualQueryAddress ? "green" : ""}>
                {isRecipientEqualQueryAddress ? "-" : "+"}
                {TonWeb.utils.fromNano(String(amount))} {jetton?.symbol}
              </Amount>
            )}

            {NFTData && (
              <NFT>
                <NFTPreview src={NFTData.previews[0].url} alt="NFT preview" />
              </NFT>
            )}
          </MiddleRight>
        </Middle>

        {comment && <Comment>{comment}</Comment>}

        <Divider />

        <Bottom>
          <BottomText>Fee: {TonWeb.utils.fromNano(String(fee))} TON</BottomText>

          <BottomText>
            {formatDistanceToNow(new Date(timestamp * 1000), {
              addSuffix: true,
            })}
          </BottomText>
        </Bottom>
      </Wrapper>

      <Modal onClose={() => setModalOpened(false)} opened={isModalOpened}>
        <CardModal {...props} />
      </Modal>
    </>
  );
};

export { Card };
