import down from "../../public/assets/elements/down.svg";
import Image from "next/image";
export default function DropDown() {
  return (
    <div className=" w-[40px] h-[40px]">
      <div className=" w-[40px] h-[40px] bg-[#2a2a2a] border-[2px] border-[#7e7e7e] rounded-full flex justify-center items-center hover:border-slate-100">
        <div className=" relative ">
          <Image src={down} alt="info" />
        </div>
      </div>
    </div>
  );
}
