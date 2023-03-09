import { useState } from "react";
import Image from "next/image";
import ExpandedCard from "./ExpandedCard";
import { motion } from "framer-motion";
import LoaderNetflix from "../../public/assets/loader/Netflix_LoadTime.gif";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MobileItem(props: any) {
  return (
    <div
      className={
        "  z-10 hover:z-40 overflow-visible flex-none w-[229px] h-[129px] mx-[3px] bg-black text-black rounded-sm "
      }
    >
      <Link
        href={{
          pathname: "/player/player",
          query: { videoLink: props.videoLink },
        }}
      >
        <button className="relative w-[229px] h-[129px] rounded-md overflow-hidden">
          <Image
            src={props.imgLink ? props.imgLink : LoaderNetflix}
            width={229}
            height={129}
            alt={"ing"}
          />
        </button>
      </Link>
    </div>
  );
}
