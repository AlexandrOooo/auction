import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import styles from "./styles/Main.module.scss";
import AuctionItem from "../components/AuctionItem/AuctionItem";
// import axios from "../axios";

type AuctionItem = {
  id: number;
  title: string;
  last_bet: number;
  expired_time: number;
  imageUrl: string;
};

const Main: React.FC = () => {
  const [auctions, setAuctions] = useState<AuctionItem[]>([]);

  useEffect(() => {
    const getAuctions = async () => {
      // const { data } = await axios.get('/auctions');
      const data = [
        {
          id: 0,
          title: "The first car ever",
          last_bet: 120000,
          expired_time: Date.now() + 5 * 24 * 60 * 60 * 1000,
          imageUrl: ''
        },
        {
          id: 1,
          title: "The second car ever",
          last_bet: 10000,
          expired_time: Date.now() + 12 * 24 * 60 * 60 * 1000,
          imageUrl: ''
        },
        {
          id: 3,
          title: "Nokia 3310",
          last_bet: 120,
          expired_time: Date.now() + 4 * 60 * 60 * 1000,
          imageUrl: ''
        },
      ];

      setAuctions(data);
    };

    getAuctions();
  }, []);

  return (
    <div className={styles.root}>
      <header>
        <Button variant="contained">
          <Link to="/sign-in">Sign In</Link>
        </Button>
        <Button variant="contained">
          <Link to="/sign-up">Sign Up</Link>
        </Button>
      </header>
      <main>
        <ul>{auctions.map(item => (
          <li>
            <AuctionItem imageUrl={item.imageUrl}/>
          </li>
        ))}</ul>
      </main>
    </div>
  );
};

export default Main;
