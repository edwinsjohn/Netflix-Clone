import playIcon from "../../public/assets/elements/play.svg";
import Image from "next/image";
export default function PlayButtonRounded() {
  return (
    <div className=" w-[40px] h-[40px]">
      <div className=" w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center hover:bg-slate-300">
        <div className=" relative ">
          <Image src={playIcon} alt="play" />
        </div>
      </div>
    </div>
  );
}
