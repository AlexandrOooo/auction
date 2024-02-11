import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import styles from "./BetHistory.module.scss";
import { BetInHistory } from "../../@types/types";

const BetHistory = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [betList, setBetList] = useState<BetInHistory[]>([]);
  const [amountOfShowedBets, setAmountOfShowedBets] = useState(10);

  useEffect(() => {
    setBetList([
      {
        username: "@bigboy0001",
        bet: 120,
        time: Date.now() - 5 * 60 * 1000,
      },
      {
        username: "@peppa_pig",
        bet: 80,
        time: Date.now() - 15 * 60 * 1000,
      },
      {
        username: "@arnold_shwarznegger",
        bet: 45,
        time: Date.now() - 16 * 60 * 1000,
      },
      {
        username: "@bella55",
        bet: 35,
        time: Date.now() - 21 * 60 * 1000,
      },
      {
        username: "@therichestmenhere",
        bet: 20,
        time: Date.now() - 28 * 60 * 1000,
      },
      {
        username: "@2349173741375",
        bet: 10,
        time: Date.now() - 35 * 60 * 1000,
      },
      {
        username: "@bigboy0001",
        bet: 120,
        time: Date.now() - 5 * 60 * 1000,
      },
      {
        username: "@peppa_pig",
        bet: 80,
        time: Date.now() - 15 * 60 * 1000,
      },
      {
        username: "@arnold_shwarznegger",
        bet: 45,
        time: Date.now() - 16 * 60 * 1000,
      },
      {
        username: "@bella55",
        bet: 35,
        time: Date.now() - 21 * 60 * 1000,
      },
      {
        username: "@therichestmenhere",
        bet: 20,
        time: Date.now() - 28 * 60 * 1000,
      },
      {
        username: "@2349173741375",
        bet: 10,
        time: Date.now() - 35 * 60 * 1000,
      },
      {
        username: "@bigboy0001",
        bet: 120,
        time: Date.now() - 5 * 60 * 1000,
      },
      {
        username: "@peppa_pig",
        bet: 80,
        time: Date.now() - 15 * 60 * 1000,
      },
      {
        username: "@arnold_shwarznegger",
        bet: 45,
        time: Date.now() - 16 * 60 * 1000,
      },
      {
        username: "@bella55",
        bet: 35,
        time: Date.now() - 21 * 60 * 1000,
      },
      {
        username: "@therichestmenhere",
        bet: 20,
        time: Date.now() - 28 * 60 * 1000,
      },
      {
        username: "@2349173741375",
        bet: 10,
        time: Date.now() - 35 * 60 * 1000,
      },
      {
        username: "@bigboy0001",
        bet: 120,
        time: Date.now() - 5 * 60 * 1000,
      },
      {
        username: "@peppa_pig",
        bet: 80,
        time: Date.now() - 15 * 60 * 1000,
      },
      {
        username: "@arnold_shwarznegger",
        bet: 45,
        time: Date.now() - 16 * 60 * 1000,
      },
      {
        username: "@bella55",
        bet: 35,
        time: Date.now() - 21 * 60 * 1000,
      },
      {
        username: "@therichestmenhere",
        bet: 20,
        time: Date.now() - 28 * 60 * 1000,
      },
      {
        username: "@2349173741375",
        bet: 10,
        time: Date.now() - 35 * 60 * 1000,
      },
      {
        username: "@bigboy0001",
        bet: 120,
        time: Date.now() - 5 * 60 * 1000,
      },
      {
        username: "@arnold_shwarznegger",
        bet: 45,
        time: Date.now() - 16 * 60 * 1000,
      },
      {
        username: "@bella55",
        bet: 35,
        time: Date.now() - 21 * 60 * 1000,
      },
      {
        username: "@therichestmenhere",
        bet: 20,
        time: Date.now() - 28 * 60 * 1000,
      },
      {
        username: "@2349173741375",
        bet: 10,
        time: Date.now() - 35 * 60 * 1000,
      },
    ]);

    setLoading(false);
  }, []);

  const onShowMore = () => {
    setAmountOfShowedBets((prev) => prev + 10);
  };

  if(isLoading){
    return <p>loading...</p>
  }

  return (
    <div className={styles.root}>
      <ul className={styles.betList}>
        {betList.slice(0, amountOfShowedBets).map((item) => (
          <li key={item.bet} className={styles.bet}>
            <b className={styles.username}>{item.username}: </b>
            {<p>${item.bet}</p>}
          </li>
        ))}
      </ul>
      {betList.length - amountOfShowedBets > 0 ? (
        <Button onClick={onShowMore}>
          Show more ({betList.length - amountOfShowedBets}) ↓
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BetHistory;
