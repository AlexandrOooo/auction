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
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useSelector } from "react-redux";

import { AuctionFull, AuctionModalType } from "../../@types/types";
import Header from "../../components/Header/Header";
import styles from "./Auction.module.scss";
import AuctionItemModal from "../../components/AuctionItemModal/AuctionItemModal";
import { fetchLot } from "../../redux/slices/lots/requests";
import { UseAppDispatch } from "../../redux/store";
import { selectAllLots } from "../../redux/slices/lots/selector";
import BetHistory from "../../components/BetHistory/BetHistory";
import Chat from "../../components/Chat/Chat";

const Auction = () => {
  const [bet, setBet] = useState<number>(0);
  const appDispatch = UseAppDispatch();
  const { lot } = useSelector(selectAllLots);
  const [currentTabPage, setCurrentTabPage] = useState<number>(0);

  useEffect(() => {
    appDispatch(fetchLot());
  }, []);

  const onChangeBet = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBet(Number(event.target.value));
  };

  if (!lot) {
    return <>Loading</>;
  }

  return (
    <div className={styles.root}>
      <Header />
      <main>
        <picture>
          <img
            src={lot.photos[0]}
            alt=""
            className={styles["auction-main-image"]}
          />

          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {lot.photos.slice(1).map((item) => (
              <ImageListItem key={item} rows={1} cols={1}>
                <img src={item} alt={item} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </picture>

        <div className={styles.info}>
          <h2>{lot?.name}</h2>
          <p>last bet: ${lot?.lastBet}</p>
          {true ? (
            <AuctionItemModal type={AuctionModalType.Edit} initialData={lot} />
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
                <Button
                  variant="contained"
                  color="success"
                  disabled={Number(lot?.lastBet)! >= bet}
                >
                  bet
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.bottomPanel}>
          <Tabs
            value={currentTabPage}
            onChange={(e, newPage: number) => setCurrentTabPage(newPage)}
            aria-label="basic tabs example"
          >
            <Tab label="Bet history" />
            <Tab label="Chat" />
            <Tab label="Lot description" />
          </Tabs>
          {currentTabPage === 0 ? (
            <BetHistory />
          ) : currentTabPage === 1 ? (
            <Chat />
          ) : currentTabPage === 2 ? (
            <p>{lot?.description}</p>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
};

export default Auction;
