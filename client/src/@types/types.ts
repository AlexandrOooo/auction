export type Auction = {
  id: number;
  title: string;
  creator: string;
  last_bet: number;
  expired_time: number;
  imageUrl: string;
};

export type AuctionFull = {
    id: number;
    title: string;
    creator: string;
    lastBet: number;
    expiredTime: number;
    imageUrl: string;
    description: string;
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