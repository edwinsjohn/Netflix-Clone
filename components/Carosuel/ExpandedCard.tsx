import AddToWatch from "../common/addToWatch";
import DropDown from "../common/DropDown";
import LikeDislike from "../common/LikeDislike";
import PlayButtonRounded from "../common/PlayButtonRounded";
import Image from "next/image";
import NetLoader from "../../public/assets/loader/Netflix_LoadTime.gif";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { triggerStateChange } from "@/store/TriggerSlice";
import { moreData } from "@/store/moreInfoSlice";
import { useState } from "react";
export default function ExpandedCard(props: any) {
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
  } = props.extendedData;
  const dispatch = useAppDispatch();

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
    <div
      id="expanded-card"
      className={
        " w-[345px] h-[360px] bg-[#141414]   overflow-hidden m-3 drop-shadow-4xl  rounded-md text-[#f9f9f9]"
      }
    >
      <div className="relative w-[100%] h-[195px] ">
        <Image
          src={props.thumbnail ? props.thumbnail : NetLoader}
          width={345}
          height={195}
          alt="thumbnail"
        />
      </div>
      <div className=" flex m-3 justify-between ">
        <div className=" flex w-[140px]  justify-around">
          <Link
            href={{ pathname: "/home/player", query: { videoLink: videoUrl } }}
          >
            <PlayButtonRounded />
          </Link>
          <AddToWatch />
          <LikeDislike />
        </div>
        <div onClick={handleMoreInfo}>
          <DropDown />
        </div>
      </div>
      {/* details*/}
      <div className=" flex m-4 text-[15px] tracking-wider">
        <div className=" mx-1 text-[15px] text-[#00d672] font-bold">
          {match}
          <span>% Match</span>
        </div>

        <div className="mx-1 tracking-wider h-[20px] font-semibold border-[1px] border-slate-300 px-2">
          {censor}
        </div>
        <div className=" mx-1 font-semibold font-l ">{duration}</div>
        <div className=" text-xs leading-3 p-1"> HD </div>
      </div>

      {/* gener */}
      <div className=" m-4 text-s font-[500]">
        {gener1}
        <span className=" text-[#646464]"> • </span>
        {gener2}
        <span className=" text-[#646464]"> • </span>
        {gener3}
      </div>
    </div>
  );
}
