import { Auction, AuctionFull } from "../../../@types/types";

export interface Lots {
  lots: Auction[];
  lot: AuctionFull | null;
}
