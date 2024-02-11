import { LastBet } from "../../@types/types";
import styles from "./AuctionItem.module.scss";

type AuctionItemType = {
  imageUrl: string;
  title: string;
  lastBet: LastBet | null;
  endAt: string;
};

const AuctionItem: React.FC<AuctionItemType> = ({
  imageUrl,
  title,
  lastBet,
  endAt,
}) => {
  const expiredTime = new Date(endAt);

  return (
    <div className={styles.root}>
      <picture>
        <img src={imageUrl} alt="photo" />
      </picture>
      <div className={styles.info}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div>
            <p>last bet: ${lastBet && lastBet.betPrice}</p>
          </div>
          <div>
            <p>ends in:</p>
            <h3>{expiredTime.toDateString()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;
