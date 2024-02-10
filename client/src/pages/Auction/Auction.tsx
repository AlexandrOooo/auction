import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { useSelector } from "react-redux";

import { AuctionFull, AuctionModalType } from "../../@types/types";
import Header from "../../components/Header/Header";
import styles from "./Auction.module.scss";
import AuctionItemModal from "../../components/AuctionItemModal/AuctionItemModal";
import { fetchLot } from "../../redux/slices/lots/requests";
import { UseAppDispatch } from "../../redux/store";
import { selectAllLots } from "../../redux/slices/lots/selector";

const Auction = () => {
  const { id } = useParams();
  const [data, setData] = useState<AuctionFull | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [bet, setBet] = useState<number>(0);
  const useAppDispatch = UseAppDispatch();
  const { lot } = useSelector(selectAllLots);

  useEffect(() => {
    const getAuction = async () => {
      try {
        useAppDispatch(fetchLot);
        setData(lot);
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
                    type="number"
                  />
                </FormControl>
                <Button
                  variant="contained"
                  color="success"
                  disabled={+data?.lastBet! >= bet}
                >
                  bet
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Auction;
