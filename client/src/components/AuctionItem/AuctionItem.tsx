import styles from "./AuctionItem.module.scss";

type AuctionItemType = {
  imageUrl: string;
  title: string;
  creator: string;
  lastBet: number;
  expiredTime: number;
};

const AuctionItem: React.FC<AuctionItemType> = ({
  imageUrl,
  title,
  creator,
  lastBet,
  expiredTime,
}) => {
  return (
    <div className={styles.root}>
      <picture>
        <img src={imageUrl} alt="photo" />
      </picture>
      <div className={styles.info}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div>
            <p>last bet: ${lastBet}</p>
            <p>creator: {creator}</p>
          </div>
          <div>
            <p>ends in:</p>
            <h3>{expiredTime - Date.now() + "ms"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;
