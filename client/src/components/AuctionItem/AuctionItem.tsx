import style from "./AuctionItem.module.scss";

type AuctionItemType = {
  imageUrl: string;
  title: string;
  creator: string;
  last_bet: number;
  expired_time: number;
};

const AuctionItem: React.FC<AuctionItemType> = ({
  imageUrl,
  title,
  creator,
  last_bet,
  expired_time,
}) => {
  return (
    <div className={style.root}>
      <picture>
        <img src={imageUrl} alt="photo" />
      </picture>
      <div className={style.info}>
        <h2>{title}</h2>
        <div className={style.details}>
          <div>
            <p>last bet: ${last_bet}</p>
            <p>creator: {creator}</p>
          </div>
          <div>
            <p>ends in:</p>
            <h3>{expired_time - Date.now() + "ms"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;
