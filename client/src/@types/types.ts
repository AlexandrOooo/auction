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
    last_bet: number;
    expired_time: number;
    imageUrl: string;
    description: string;
  };