import { useState } from "react";
import Image from "next/image";
import ExpandedCard from "./ExpandedCard";
import { motion } from "framer-motion";
import LoaderNetflix from "../../public/assets/loader/Netflix_LoadTime.gif";

export default function ItemCard(props: any) {
  const thumbnail: any = props.imgLink;
  const [hoverScale, setHoverScale] = useState<any>(" scale-0 hidden");

  const onHoverControls: any = (event: any) => {
    // if (props.postiton % 5 == 0) {
    //   setHoverScale("-ml-[128px] origin-right scale-1 transition ease-in-out");
    // }
    if (props.postiton % props.cardNo == 0) {
      setHoverScale(
        " -ml-[128px] origin-right scale-1 transition ease-in-out  delay-1000 duration-500"
      );
    } else if ((props.postiton - 1) % props.cardNo == 0) {
      setHoverScale(
        "  -ml-[12px] origin-right scale-1 transition ease-in-out delay-1000 duration-500"
      );
    } else {
      setHoverScale(
        "  -ml-[70px]  scale-1 transition ease-in- delay-1000 duration-500"
      );
    }
  };

  const onHoverControlsLeave: any = (event: any) => {
    setHoverScale(" hidden ease-out transition");
  };

  return (
    <div
      onMouseEnter={onHoverControls}
      onMouseLeave={onHoverControlsLeave}
      className={
        "  z-10 hover:z-40 overflow-visible flex-none w-[229px] h-[129px] mx-[3px] bg-black text-black rounded-sm "
      }
    >
      <div className="relative w-[229px] h-[129px] rounded-md overflow-hidden">
        <Image
          src={props.imgLink ? props.imgLink : LoaderNetflix}
          width={229}
          height={129}
          alt={"ing"}
        />
      </div>

      <div
        className={"absolute z-40 -top-[100px] hover:delay-1000 " + hoverScale}
      >
        <ExpandedCard thumbnail={thumbnail} extendedData={props.Sdata} />
      </div>
    </div>
  );
}
