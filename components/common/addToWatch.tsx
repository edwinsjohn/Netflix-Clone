import add from "../../public/assets/elements/add.svg";
import Image from "next/image";
export default function AddToWatch() {
  return (
    <div className=" w-[40px] h-[40px]">
      <div className=" w-[40px] h-[40px] bg-[#2a2a2a] border-[2px] border-[#7e7e7e] rounded-full flex justify-center items-center hover:border-slate-100">
        <div className=" relative p-2">
          <Image src={add} alt="add" />
        </div>
      </div>
    </div>
  );
}
