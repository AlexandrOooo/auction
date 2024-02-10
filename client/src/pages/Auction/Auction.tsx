import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Tabs,
  Tab,
} from "@mui/material";

import { AuctionFull, AuctionModalType } from "../../@types/types";
import Header from "../../components/Header/Header";
import styles from "./Auction.module.scss";
import AuctionItemModal from "../../components/AuctionItemModal/AuctionItemModal";
import BetHistory from "../../components/BetHistory/BetHistory";
import Chat from "../../components/Chat/Chat";

const Auction = () => {
  const { id } = useParams();
  const [data, setData] = useState<AuctionFull | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [bet, setBet] = useState<number>(0);
  const [currentTabPage, setCurrentTabPage] = useState<number>(0);

  useEffect(() => {
    const getAuction = async () => {
      try {
        const data = {
          id: 0,
          name: "The first car ever",
          startPrice: 0,
          lastBet: 120000,
          isArchived: false,
          archivedAt: false,
          expiredAt: 32,
          isOwner: false,
          photos: [
            "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
          ],
          description: `This is the first car ever. I want to sell it to spend all money on poor children that don't have ability to buy food and can't afford enough water for living and growing up. When I was a child I had to work hard by my own to earn a living and I want noone to have as hard childhood as I had.
          The car was created in 1824 by my dad that spent all salary on this prototipe instead of buying food for me and my sisters, so I hate this car more than you can imagine. I hope you will crash this car as soon as you buy it.`,
        };

        setData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getAuction();
    setLoading(false);
  }, []);

  const onChangeBet = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBet(Number(event.target.value));
  };

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <div className={styles.root}>
      <Header />
      <main>
        <picture>
          <img src={data?.photos[0]} />
        </picture>
        <div className={styles.info}>
          <h2>{data?.name}</h2>
          <p>last bet: ${data?.lastBet}</p>
          {true ? (
            <AuctionItemModal type={AuctionModalType.Edit} />
          ) : (
          <div className={styles.betOutline}>
            <b>make your bet:</b>
            <div className={styles.betForm}>
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  New Bet
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                  value={bet}
                  onChange={onChangeBet}
                />
              </FormControl>
              <Button variant="contained" color="success" disabled={+data?.lastBet! >= bet}> 
                bet
              </Button>
            </div>
          </div>)}
        </div>
        <div className={styles.bottomPanel}>
          <Tabs
            value={currentTabPage}
            onChange={(e, newPage: number) => setCurrentTabPage(newPage)}
            aria-label="basic tabs example"
          >
            <Tab label="Order history" />
            <Tab label="Chat" />
            <Tab label="Lot description" />
          </Tabs>
          {currentTabPage === 0 ? (
            <BetHistory />
          ) : currentTabPage === 1 ? (
            <Chat />
          ) : currentTabPage === 2 ? (
            <p>{data?.description}</p>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
};

export default Auction;
