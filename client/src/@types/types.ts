export type Auction = {
  id: number;
  name: string;
  lastBet: number;
  expiredAt: number;
  photos: string[];
};

export type AuctionFull = {
  id: number;
  name: string;
  startPrice: number;
  lastBet: number;
  isArchived: boolean;
  archivedAt: boolean;
  isOwner: boolean;
  photos: string[];
  description: string;
  expiredAt: number;
};

export enum AuctionModalType {
  Edit = "edit",
  Create = "create",
}

export enum AuthType {
  signIn = "sign-in",
  signUp = "sign-up",
}

export type BetInHistory = {
  username: string,
  bet: number,
  time: number,
}
