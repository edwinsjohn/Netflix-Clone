import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Image from "next/image";
import nexticon from "../../public/assets/elements/next.svg";
import previcon from "../../public/assets/elements/back.svg";
import axios from "axios";

function CardSlider({ link }: any) {
  const [currentPage, setCurrentPage] = useState(0);
  const [hide, sethide] = useState(" hidden ");
  const [windowSize, setWindowSize] = useState(0);
  const [postiton, incrementPosition] = useState(0);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    async function doGetRequest() {
      let res = await axios.get(link);

      let recived = res.data.content;

      setCard(recived);
    }

    doGetRequest();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // console.log(data);
  const cards = card.map((n, index) => {
    // console.log(n);
    const { imgUrl } = n;
    return (
      <ItemCard
        key={index}
        imgLink={imgUrl}
        currentPage={currentPage}
        postiton={index + 1}
        Sdata={n}
        cardNo={Math.floor(windowSize / 230)}
      >
        {" "}
      </ItemCard>
    );
  });

  return (
    <div className="relative my-5  text-white">
      <div className="relative z-10 hover:z-40">
        <div
          className="ml-16 transition-transform duration-300 ease-in-out transform w-full z-10 hover:z-40"
          style={{
            transform: `translateX(-${
              currentPage == 0
                ? currentPage * windowSize
                : currentPage * windowSize - 150 * currentPage
            }px)`,
          }}
        >
          <div className="flex">{cards}</div>
        </div>
      </div>

      <div className="absolute top-0 ">
        <div className="relative w-screen ">
          <div
            className={
              hide +
              "absolute w-[80px] z-[40] top-0 h-[130px] text-white bg-gradient-to-r from-netflix_bg to-transparent  px-4 rounded-r-md"
            }
            onClick={() => {
              currentPage == 0
                ? setCurrentPage(
                    cards.length / Math.floor(windowSize / 230) - 1
                  )
                : setCurrentPage(currentPage - 1);
            }}
          >
            <div className="w-[80px] h-[130px] -ml-5 pl-5 opacity-[0.2] hover:opacity-90">
              <div className="relative w-10 h-10 -mx-1 top-[42px]">
                <Image src={previcon} fill alt="<" />
              </div>
            </div>
          </div>

          <div
            className="absolute  right-0 w-[76px] z-[40] top-0 h-[130px] text-white bg-gradient-to-l from-netflix_bg to-transparent   px-4 rounded-l-md"
            onClick={() => {
              sethide(" ");
              currentPage < cards.length / Math.floor(windowSize / 230) - 1
                ? setCurrentPage(currentPage + 1)
                : setCurrentPage(0);
            }}
          >
            <div className=" w-[72px] h-[130px] -ml-5 pl-5 opacity-[0.2] hover:opacity-90">
              <div className="relative w-10 h-10 -mx-1 top-[42px] ">
                <Image src={nexticon} fill alt="<" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
