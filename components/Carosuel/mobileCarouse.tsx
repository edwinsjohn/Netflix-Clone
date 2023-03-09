import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Image from "next/image";
import nexticon from "../../public/assets/elements/next.svg";
import previcon from "../../public/assets/elements/back.svg";
import axios from "axios";
import MobileItem from "./mobileItem";

export default function MobileSlider({ link }: any) {
  const [currentPage, setCurrentPage] = useState(0);
  const [hide, sethide] = useState(" hidden ");
  const [windowSize, setWindowSize] = useState(0);
  //   const [postiton, incrementPosition] = useState(0);
  const [card, setCard] = useState([]);

  useEffect(() => {
    async function doGetRequest() {
      let res = await axios.get(link);

      let recived = res.data.content;

      setCard(recived);
    }

    doGetRequest();
  }, []);
  // console.log(data);
  const cards = card.map((n, index) => {
    // console.log(n);
    const { imgUrl, videoUrl } = n;
    return (
      <MobileItem
        key={index}
        imgLink={imgUrl}
        videoLink={videoUrl}
        currentPage={currentPage}
        postiton={index + 1}
        Sdata={n}
        cardNo={Math.floor(windowSize / 230)}
      >
        {" "}
      </MobileItem>
    );
  });

  return (
    <div className="relative my-5  text-white">
      <div className="relative z-10 hover:z-40">
        <div className="ml-4 flex overflow-x-scroll w-full z-10 ">
          <div className="flex">{cards}</div>
        </div>
      </div>
    </div>
  );
}
