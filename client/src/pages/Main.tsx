import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionItem from "../components/AuctionItem/AuctionItem";

import Button from "@mui/material/Button";
import styles from "./styles/Main.module.scss";
import { Auction } from "../@types/types";
// import axios from "../axios";

const Main: React.FC = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    const getAuctions = async () => {
      // const { data } = await axios.get('/auctions');
      const data = [
        {
          id: 0,
          title: "The first car ever",
          creator: "@vlad_kvlchk",
          last_bet: 120000,
          expired_time: Date.now() + 5 * 24 * 60 * 60 * 1000,
          imageUrl:
            "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
        },
        {
          id: 1,
          title: "The second car ever",
          creator: "@vlad_kvlchk",
          last_bet: 10000,
          expired_time: Date.now() + 12 * 24 * 60 * 60 * 1000,
          imageUrl:
            "https://www.iliketowastemytime.com/sites/default/files/mercedes-benz-300sl-old-restoration1.jpg",
        },
        {
          id: 3,
          title: "Nokia 3310",
          creator: "@vlad_kvlchk",
          last_bet: 120,
          expired_time: Date.now() + 4 * 60 * 60 * 1000,
          imageUrl:
            "https://content2.rozetka.com.ua/goods/images/big/310881485.jpg",
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
        <ul>
          {auctions.map((item) => (
            <li key={item.id}>
              <Link to={"/auction/" + item.id}>
                <AuctionItem
                  imageUrl={item.imageUrl}
                  title={item.title}
                  creator={item.creator}
                  last_bet={item.last_bet}
                  expired_time={item.expired_time}
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Main;
