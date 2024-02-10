import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionItem from "../../components/AuctionItem/AuctionItem";
import styles from "./Main.module.scss";
import { Auction, AuctionModalType } from "../../@types/types";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import AuctionItemModal from "../../components/AuctionItemModal/AuctionItemModal";

const Main: React.FC = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const { isAuth } = useSelector(selectUser);

  useEffect(() => {
    const getAuctions = async () => {
      const data = [
        {
          id: 0,
          name: "The first car ever",
          lastBet: 120000,
          expiredAt: Date.now() + 5 * 24 * 60 * 60 * 1000,
          photos: [
            "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
          ],
        },
        {
          id: 1,
          name: "The second car ever",
          lastBet: 10000,
          expiredAt: Date.now() + 12 * 24 * 60 * 60 * 1000,
          photos: [
            "https://www.iliketowastemytime.com/sites/default/files/mercedes-benz-300sl-old-restoration1.jpg",
          ],
        },
        {
          id: 3,
          name: "Nokia 3310",
          lastBet: 120,
          expiredAt: Date.now() + 4 * 60 * 60 * 1000,
          photos: [
            "https://content2.rozetka.com.ua/goods/images/big/310881485.jpg",
          ],
        },
      ];

      setAuctions(data);
    };

    getAuctions();
  }, []);

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles["main-container"]}>
        {isAuth && (
          <div className={styles["action-panel"]}>
            <AuctionItemModal type={AuctionModalType.Create} />
          </div>
        )}
        <ul className={styles["auctions"]}>
          {auctions.map((item) => (
            <li key={item.id}>
              <Link to={"/auction/" + item.id}>
                <AuctionItem
                  imageUrl={item.photos[0]}
                  title={item.name}
                  lastBet={item.lastBet}
                  expiredTime={item.expiredAt}
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
