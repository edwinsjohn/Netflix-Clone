import HomeNavigation from "@/components/common/Navigation";
import Featuring from "@/components/common/featureing";
import FullCarousel from "@/components/Carosuel/FullCarousel";
import MoreInfo from "@/components/common/MoreInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTrig, triggerStateChange } from "@/store/TriggerSlice";

export default function NewPopular() {
  return (
    <div className="relative bg-netflix_bg w-screen min-h-screen">
      <HomeNavigation />
      <div className="relative text-center text-netflix_text_white_light w-full h-screen flex justify-center items-center z-10">
        <div>
          <h1>API Not Created </h1>
          <h2>Check Out other pages</h2>
        </div>
      </div>
    </div>
  );
}
