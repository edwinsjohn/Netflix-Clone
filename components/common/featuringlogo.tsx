import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import play from "../../public/assets/elements/play.svg";
import info from "../../public/assets/elements/info.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTrig, triggerStateChange } from "@/store/TriggerSlice";
import { moreData } from "@/store/moreInfoSlice";
import logoPlain from "../../public/assets/logos/logo_plain.png";
import { useRouter } from "next/router";
import axios from "axios";
// import MoreInfo from "@/components/moreInfo/moreInfo";

export function PlayBtnWhite() {
  return (
    <button className=" bg-[#ffffff] text-black w-[128px] h-[48px] flex justify-around place-items-center rounded-md">
      <div className="ml-5 relative w-[24px] h-[26px]">
        <Image src={play} alt="Play" fill />
      </div>

      <div className="mr-5 text-xl font-[700]">Play</div>
    </button>
  );
}

export function MovingLogo({ logo }: any) {
  return (
    <motion.div
      className="relative w-[550px] "
      animate={{
        scale: [1, 0.6],
        y: [0, 160],
        x: [0, -100],
      }}
      transition={{
        repeat: 1,
        repeatType: "mirror",
        duration: 1,
        delay: 10,
        repeatDelay: 20,
      }}
    >
      <Image
        src={logo ? logo : logoPlain}
        width={500}
        height={220}
        alt="flogo"
        style={{ objectFit: "contain" }}
      />
    </motion.div>
  );
}

export default function FeaturedLogo(props: any) {
  const triggerVal = useAppSelector(selectTrig);
  const dispatch = useAppDispatch();
  //   const [srcVal, setSrc] = useState("");

  const {
    movieName,
    duration,
    language,
    gener1,
    gener2,
    gener3,
    description,
    cast,
    type,
    videoUrl,
    imgUrl,
    logo,
    bg,
    match,
    censor,
    time_stamp,
  } = props.data;
  //   console.log(logo);
  console.log(triggerVal);
  //   function handleClose() {
  //     SetActivation(false);
  //   }

  function handleMoreInfo() {
    const newdata = {
      movieName: movieName,
      duration: duration,
      language: language,
      gener1: gener1,
      gener2: gener2,
      gener3: gener3,
      description: description,
      cast: cast,
      type: type,
      videoUrl: videoUrl,
      imgUrl: imgUrl,
      logo: logo,
      bg: bg,
      match: match,
      censor: censor,
      time_stamp: time_stamp,
    };
    dispatch(moreData(newdata));

    dispatch(triggerStateChange());
  }
  return (
    <div className="relative z-20 mt-20 text-white max-sm:scale-[.405] max-sm:-top-[150px] max-sm:-ml-[210px] max-md:scale-[.55] max-md:-top-[100px] max-md:-ml-[130px]">
      <MovingLogo logo={logo} />
      <motion.div
        className="relative w-[500px] my-4 text-lg "
        animate={{ opacity: [1, 0], y: [0, 50] }}
        transition={{
          repeat: 1,
          repeatType: "mirror",
          duration: 1,
          delay: 10,
          repeatDelay: 20,
        }}
      >
        <p>{description}</p>
      </motion.div>
      <div className="flex w-[550px] my-10">
        <Link
          href={{
            pathname: "/player/player",
            query: { videoLink: videoUrl },
          }}
        >
          <PlayBtnWhite />
        </Link>

        <button
          onClick={handleMoreInfo}
          className="ml-3 bg-[#6d6d6ebe]  text-white w-[174px] h-[48px] flex justify-around place-items-center rounded-md"
        >
          <div className="ml-5 relative w-[24px] h-[26px] ">
            <Image src={info} alt="Play" fill />
          </div>
          <div className="mr-5 text-xl font-[700]">More Info</div>
        </button>
      </div>
      {/* {activateInfo ? <MoreInfo close={handleClose} /> : <div></div>} */}
    </div>
  );
}
