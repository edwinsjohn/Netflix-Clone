import HomeNavigation from "@/components/common/Navigation";
import Featuring from "@/components/common/featureing";
import FullCarousel from "@/components/Carosuel/FullCarousel";
import MoreInfo from "@/components/common/MoreInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTrig, triggerStateChange } from "@/store/TriggerSlice";
export default function Browse() {
  const triggerVal = useAppSelector(selectTrig);

  return (
    <div className="bg-netflix_bg max-w-screen min-h-screen overflow-x-hidden ">
      {triggerVal ? <MoreInfo /> : <></>}
      <HomeNavigation />
      <Featuring />
      <div className="relative z-20 hover:z-30 -top-[11rem] ">
        <FullCarousel sectionTitle={"Trending Now"} link={"/api/db/all_data"} />
      </div>
    </div>
  );
}
