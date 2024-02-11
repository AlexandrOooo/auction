import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuctionItem from "../../components/AuctionItem/AuctionItem";
import styles from "./Main.module.scss";
import { AuctionModalType } from "../../@types/types";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import AuctionItemModal from "../../components/AuctionItemModal/AuctionItemModal";
import { UseAppDispatch } from "../../redux/store";
import { fetchAllLots } from "../../redux/slices/lots/requests";
import { selectAllLots } from "../../redux/slices/lots/selector";

const Main: React.FC = () => {
  const appDispatch = UseAppDispatch();
  const { isAuth } = useSelector(selectUser);
  const { lots, hasNext } = useSelector(selectAllLots);
  const [currentSheet, setCurrentSheet] = useState(1);

  useEffect(() => {
    appDispatch(
      fetchAllLots({
        limit: 10,
        skip: currentSheet - 1,
      })
    );
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
          {lots.map((item) => (
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
        <div className={styles.pagination}>
          {currentSheet && (
            <Button
              variant="contained"
              onClick={() => setCurrentSheet((prev) => prev - 1)}
              disabled={currentSheet === 1}
            >{`< Previous Page`}</Button>
          )}
          {hasNext && (
            <Button
              variant="contained"
              onClick={() => setCurrentSheet((prev) => prev + 1)}
              disabled={!hasNext}
            >{`Next Page >`}</Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
