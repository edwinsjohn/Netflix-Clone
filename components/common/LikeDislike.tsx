import like from "../../public/assets/elements/like.svg";
import Image from "next/image";
export default function LikeDislike() {
  return (
    <div className=" w-[40px] h-[40px]">
      <div className=" w-[40px] h-[40px] bg-[#2a2a2a] border-[2px] border-[#7e7e7e] rounded-full flex justify-center items-center hover:border-slate-100">
        <div className=" relative scale-[1.6]">
          <Image src={like} alt="like" />
        </div>
      </div>
    </div>
  );
}
