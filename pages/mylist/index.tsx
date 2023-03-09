import HomeNavigation from "@/components/common/Navigation";
import Featuring from "@/components/common/featureing";
import FullCarousel from "@/components/Carosuel/FullCarousel";
import MoreInfo from "@/components/common/MoreInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTrig, triggerStateChange } from "@/store/TriggerSlice";

export default function Mylist() {
  return (
    <div className="bg-netflix_bg w-screen min-h-screen">
      <HomeNavigation />
      list
    </div>
  );
}
