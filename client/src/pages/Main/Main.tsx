import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionItem from "../../components/AuctionItem/AuctionItem";
import styles from "./Main.module.scss";
import { Auction, AuctionModalType } from "../../@types/types";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import AuctionItemModal from "../../components/AuctionItemModal/AuctionItemModal";
import { UseAppDispatch } from "../../redux/store";
import { fetchAllLots } from "../../redux/slices/lots/requests";
import { selectAllLots } from "../../redux/slices/lots/selector";

const Main: React.FC = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const { isAuth } = useSelector(selectUser);
  const { lots } = useSelector(selectAllLots);
  const useAppDispatch = UseAppDispatch();

  useEffect(() => {
    const getAuctions = async () => {
      useAppDispatch(fetchAllLots);

      setAuctions(lots);
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
