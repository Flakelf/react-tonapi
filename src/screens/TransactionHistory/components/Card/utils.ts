import type { FormattedEvent } from "../../../../constants/types";

export const generateTransactionTypeTitle = (
  type: FormattedEvent["type"],
  isRecipientEqualQueryAddress: boolean
) => {
  let firstWord: string;
  let secondWord: string;

  if (type === "TonTransfer") {
    firstWord = "Transfer";

    return firstWord;
  }

  if (type === "JettonTransfer") {
    firstWord = "Jetton";
  }

  if (type === "NftItemTransfer") {
    firstWord = "NFT";
  }

  if (!isRecipientEqualQueryAddress) {
    secondWord = "received";
  } else {
    secondWord = "sended";
  }

  return firstWord! + " " + secondWord;
};
