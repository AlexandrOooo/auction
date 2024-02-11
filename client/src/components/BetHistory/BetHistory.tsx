import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import styles from "./BetHistory.module.scss";
import { UseAppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { getBetHistory } from "../../redux/slices/bets/requests";
import { useSelector } from "react-redux";
import { selectAllBets } from "../../redux/slices/bets/selector";

const BetHistory = () => {
  const dispatch = UseAppDispatch();
  const { id } = useParams() as { id: string };
  const [isLoading, setLoading] = useState<boolean>(true);
  const { bets } = useSelector(selectAllBets);
  const [amountOfShowedBets, setAmountOfShowedBets] = useState(10);

  useEffect(() => {
    dispatch(
      getBetHistory({
        limit: 10,
        skip: Math.floor(amountOfShowedBets / 10) - 1,
        auctionId: id,
      })
    );

    setLoading(false);
  }, []);

  const onShowMore = () => {
    setAmountOfShowedBets((prev) => prev + 10);
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles.root}>
      <ul className={styles.betList}>
        {bets.slice(0, amountOfShowedBets).map((item) => (
          <li key={item.betPrice} className={styles.bet}>
            <b className={styles.username}>{item.user}: </b>
            {<p>${item.betPrice}</p>}
          </li>
        ))}
      </ul>
      {bets.length - amountOfShowedBets > 0 ? (
        <Button onClick={onShowMore}>
          Show more ({bets.length - amountOfShowedBets}) ↓
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BetHistory;
