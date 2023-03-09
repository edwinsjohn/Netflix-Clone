import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import FeaturedLogo from "./featuringlogo";
import plainBg from "../../public/assets/bg-banner/bg_plain.png";
import { data } from "./Sample";
export default function Featuring() {
  const [selectedItem, setSelected] = useState<any>([]);

  useEffect(() => {
    async function doGetRequest() {
      let data_fetched = data;
      const index = Math.floor(Math.random() * data_fetched.length);
      const selectedData = data_fetched[index];
      setSelected(selectedData);
      //   setCard(ddd);
    }

    doGetRequest();
  }, []);

  return (
    <div className="flex justify-center">
      <div className=" justify-center relative overflow-hidden retlative max-sm:h-[450px] h-screen bg-gradient-to-r from-[#141414] to-transparent">
        <div className="relative">
          <Image
            src={selectedItem.bg ? selectedItem.bg : plainBg}
            alt={"banner"}
            width={1920}
            height={720}
            style={{ objectFit: "contain" }}
          />
          <div className="bottom-0 absolute z-[16] max-sm:h-10 h-48 w-[100%] bg-gradient-to-t from-netflix_bg via-netflix_bg to-transparent"></div>
        </div>
        <div className="absolute top-0 z-[15] object-cover hidden">
          <video
            className=" w-[100%] "
            height={1020}
            width={1820}
            controls
            autoPlay
            muted
            src={selectedItem.videoUrl ? selectedItem.videoUrl : plainBg}
          ></video>
        </div>
        <div className="ml-16 absolute top-20 max-sm:top-10">
          <FeaturedLogo data={selectedItem} />
          {/* <div className=" absolute right-0 text-white z-40">
          <button onClick={playVideo}>play</button>
        </div> */}
        </div>
        <div className="bottom-0 m-0 z-[16] p-0 left-0 absolute h-screen w-[150px] bg-gradient-to-r from-[#141414] to-transparent"></div>
        <div className="bottom-0 m-0 z-[16]  p-0 right-0 absolute h-screen w-[150px] bg-gradient-to-l from-[#141414] to-transparent"></div>
        {/*  */}
      </div>
    </div>
  );
}
