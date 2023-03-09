import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { triggerSetFalse } from "@/store/TriggerSlice";
import { selectInfo } from "@/store/moreInfoSlice";
import plainImg from "../../public/assets/loader/Netflix_LoadTime.gif";
import Image from "next/image";
import { motion } from "framer-motion";
// import { MovingLogo } from "./featuringlogo";
import Link from "next/link";
import logoPlain from "../../public/assets/logos/logo_plain.png";
import PlayButtonRounded from "./PlayButtonRounded";
import { PlayBtnWhite } from "./featuringlogo";
import AddToWatch from "./addToWatch";
import LikeDislike from "./LikeDislike";

export default function MoreInfo() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectInfo);
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
  } = data;

  return (
    <div className=" tracking-wider text-white fixed flex justify-center  z-[60] w-screen h-screen bg-black bg-opacity-60">
      <div className="relative w-[50%] top-10 h-fit bg-netflix_bg rounded-lg xl:w-[848px]">
        <button
          className="absolute z-[11] right-3 top-3 w-8 h-8 border-[1px] border-gray-600 text-gray-600 hover:text-white rounded-full p-1"
          onClick={() => dispatch(triggerSetFalse())}
        >
          {" X"}
        </button>

        <div className="relative w-[100%] aspect-video bg-red overflow-hidden rounded-lg">
          <div className="relative z-[10] w-full h-full pointer-events-none ">
            <Image
              width={848}
              height={477}
              src={bg ? bg : plainImg}
              alt={"bg-banner-more-info"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute z-[11] top-[30%] w-[40%] ml-[8%] xl:top-[200px]">
            <motion.div
              className="relative  "
              animate={{}}
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
          </div>
          <div className=" absolute flex items-center z-[21] bottom-10 scale-[50%] xl:scale-100 ml-[2%] xl:ml-[8%]">
            <Link
              href={{
                pathname: "/player/player",
                query: { videoLink: videoUrl },
              }}
            >
              <PlayBtnWhite />
            </Link>
            <div className=" pl-4 xl:scale-110">
              <AddToWatch />
            </div>
            <div className=" pl-4 xl:scale-110">
              <LikeDislike />
            </div>
          </div>
          <div className="absolute w-[100%] h-20 bottom-0 z-[20] bg-gradient-to-t from-netflix_bg via-netflix_bg to-transparent"></div>
        </div>
        <div className="grid text-[8px] md:text-[12px] xl:text-[16px] grid-cols-3  ">
          <div className=" col-span-2 pl-[5%] lg:pl-14">
            <div className="flex ">
              <div className=" font-semibold text-[#00d672] pb-4">
                {match}% Match{" "}
              </div>

              <div className="mx-3  font-semibold h-[22px] border-[1px] border-[#3d3d3d] px-2">
                {censor}
              </div>
              <div className=" mx-1  font-l ">{duration}</div>
              <div className="mx-3  h-[22px] border-[1px] border-[#3d3d3d] leading-3 p-1">
                {" "}
                HD{" "}
              </div>
            </div>
            <h6 className=" tracking-wider xl:leading-6">{description}</h6>
          </div>
          <div className="  text-[3px] md:text-[5px] xl:text-[7px] text-netflix_text_white_light">
            <h1 className=" px-5 right-0">
              <span className=" text-[#4d4c4c] tracking-normal">Cast: </span>
              <span className=" font-netflix_medium_font ">{cast}</span>
            </h1>
            <h1 className=" px-5 right-0">
              <span className=" text-[#4d4c4c] tracking-normal">Geners: </span>
              <span className=" font-netflix_medium_font ">
                {gener1}, {gener2}, {gener3}
              </span>
            </h1>
          </div>
        </div>

        <div className=" w-[100%] text-center p-10 text-[#413f3f] text-[20px]">
          <h2>This is A Demo No Episodes uploaded</h2>
        </div>
      </div>
    </div>
  );
}
