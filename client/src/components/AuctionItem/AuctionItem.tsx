import style from './AuctionItem.module.scss'

type AuctionItemType = {
  imageUrl: string;
}

const AuctionItem: React.FC<AuctionItemType> = ({imageUrl}) => {
  return (
    <div className={style.root}>
      <picture>
        <img src={imageUrl} alt='photo'/>
      </picture>
      <div className={style.info}>
        info
      </div>
    </div>
  )
}

export default AuctionItem