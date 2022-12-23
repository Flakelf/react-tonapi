export interface Action {
  simple_preview: {
    full_description: string;
    name: string;
    short_description: string;
  };
  status: string;
  type: string;

  [x: string]: any;
}

export interface Event {
  actions: Action[];
  timestamp: number;
  fee: { total: string };
}

interface Jetton {
  symbol: string;
  decimals: number;
  image: string;
  name: string;
}

export interface FormattedEvent {
  type: "TonTransfer" | "JettonTransfer" | "NftItemTransfer";
  simplePreview: Action["simple_preview"];
  timestamp: number;
  recipient: { address: string };
  sender: { address: string };
  amount: number;
  nft?: string;
  fee: number;
  jetton?: Jetton;
  comment?: string;

  [x: string]: any;
}

interface Preview {
  resolution: string;
  url: string;
}

export interface NFTData {
  previews: Preview[];
  metadata: { name: string; description: string };
}
