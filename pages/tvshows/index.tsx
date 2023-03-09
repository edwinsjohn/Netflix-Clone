import HomeNavigation from "@/components/common/Navigation";
import Featuring from "@/components/common/featureing";
import FullCarousel from "@/components/Carosuel/FullCarousel";
import MoreInfo from "@/components/common/MoreInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTrig, triggerStateChange } from "@/store/TriggerSlice";
export default function TvShows() {
  const triggerVal = useAppSelector(selectTrig);

  return (
    <div className="bg-netflix_bg max-w-screen min-h-screen overflow-x-hidden ">
      {triggerVal ? <MoreInfo /> : <></>}
      <HomeNavigation />
      <Featuring />
      <div className="relative z-20 hover:z-30 -top-[11rem] ">
        <FullCarousel sectionTitle={"All Tv Shows"} link={"/api/db/tv_only"} />
      </div>
      <div className=" w-[100%] text-center p-5 text-[#413f3f] text-[20px]">
        <h2>
          This is A Clone Wensite made by{" "}
          <span>
            <a href="https://www.edwinsjohn.info">Edwin S John</a>
          </span>{" "}
        </h2>
      </div>
    </div>
  );
}
