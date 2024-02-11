export type Auction = {
  id: number;
  name: string;
  lastBet: LastBet | null;
  photos: string[];
  endAt: string;
  isArchived: false;
  isOwner: false;
  startPrice: number;
};

export type LastBet = {
  id: string;
  user: string;
  betPrice: number;
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
  endAt: string;
};

export enum AuctionModalType {
  Edit = "edit",
  Create = "create",
}

export enum AuthType {
  signIn = "sign-in",
  signUp = "sign-up",
}

export interface Bet {
  user: string;
  betPrice: number;
}

export type BetInHistory = {
  username: string;
  bet: number;
  time: number;
};

export type AuthFormData = {
  username: string;
  password: string;
};
