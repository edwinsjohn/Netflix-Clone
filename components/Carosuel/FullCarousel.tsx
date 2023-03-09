import CardSlider from "./CardSlider";
import { useEffect, useState } from "react";
import MobileItem from "./mobileItem";
import MobileSlider from "./mobileCarouse";

export default function FullCarousel(props: any) {
  const [windowSize, setWindowSize] = useState<any>(null);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>
      <div className="ml-[72px] max-sm:ml-4 tracking-wide text-white text-[22px] z-20 font-semibold">
        <h2 className="max-sm:text-[19px] ">{props.sectionTitle}</h2>
      </div>
      {windowSize > 450 ? (
        <CardSlider link={props.link} />
      ) : (
        <MobileSlider link={props.link} />
      )}
    </div>
  );
}
