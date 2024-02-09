import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionFull } from "../@types/types";
import axios from "../axios";
import Header from "../components/Header/Header";
import style from "./styles/Auction.module.scss";

const Auction = () => {
  const { id } = useParams();
  const [data, setData] = useState<AuctionFull | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAuction = async () => {
      try {
        // const { data } = await axios.get(`/auction/${id}`);
        const data = {
          id: 0,
          title: "The first car ever",
          creator: "@vlad_kvlchk",
          last_bet: 120000,
          expired_time: Date.now() + 5 * 24 * 60 * 60 * 1000,
          imageUrl:
            "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
          description: `This is the first car ever. I want to sell it to spend all money on poor children that don't have ability to buy food and can't afford enough water for living and growing up. When I was a child I had to work hard by my own to earn a living and I want noone to have as hard childhood as I had.
          The car was created in 1824 by my dad that spent all salary on this prototipe instead of buying food for me and my sisters, so I hate this car more than you can imagine. I hope you will crash this car as soon as you buy it.`,
        };

        setData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getAuction();
    setLoading(false);
  }, []);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <div className={style.root}>
      <Header />
      <main>
        <picture>
          <img src={data?.imageUrl} />
        </picture>
        <div className={style.info}>
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
        </div>
      </main>
    </div>
  );
};

export default Auction;
