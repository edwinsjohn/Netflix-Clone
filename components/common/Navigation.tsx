import React, { useState } from "react";
import logo from "../../public/assets/logos/netflix_logo_icon.svg";
import Image from "next/image";
import search from "../../public/assets/elements/search.svg";
import bell from "../../public/assets/elements/bell.svg";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/browse", current: true },
  { name: "TV Shows", href: "/tvshows", current: false },
  { name: "Movies", href: "/movies", current: false },
  { name: "New & Polular", href: "/newpopular", current: false },
  { name: "My List", href: "/mylist", current: false },
  { name: "Browse by Languages", href: "/bylang", current: false },
];

export default function HomeNavigation() {
  const [activateMenu, setMenuActivation] = useState<boolean>(false);
  const router = useRouter();
  function handleRouting(path: string) {
    router.push({ pathname: path, query: {} });
  }
  return (
    <div className="  flex justify-center tracking-wide w-[100%] text-netflix_text_white_light  fixed bg-gradient-to-b from-[rgba(20,20,20,.5)] to-transparent z-50 ">
      <div className="flex flex-wrap justify-between w-[100%] xl_new:w-[80%]">
        <div className="ml-16 flex max-sm:ml-4">
          <div className="py-6 relative w-[92px]  max-sm:w-[64px]">
            <Image width={92} height={25} src={logo} alt="Netflix" />
          </div>
          <div className="mx-5 max-lg_new:mx-1 text-[15px] my-7 max-lg_new:scale-95 max-lg:w-[500px] max-lg:text-xs max-md_new:hidden">
            <ul className="flex">
              {navigation.map((item, index) => {
                const color =
                  router.pathname === item.href
                    ? " text-white font-netflix_medium_font "
                    : " text-netflix_text_white_light hover:text-[#dfdcdc8f] ";
                return (
                  <button key={index} onClick={() => handleRouting(item.href)}>
                    <li className={"px-5  max-lg_new:px-2 " + color}>
                      <a>{item.name}</a>
                    </li>
                  </button>
                );
              })}
            </ul>
          </div>
          <div
            onMouseLeave={() => setMenuActivation(false)}
            className="relative mx-10 text-[8px] py-4 md_new:hidden max-sm:text-[6px]"
          >
            <h1 onMouseOver={() => setMenuActivation(true)}>
              Browse <span className="hidden sm:visible">&#x2BC6;</span>
            </h1>
            {activateMenu ? (
              <div className="absolute z-30 w-[260px] bg-[#0000007c] -ml-14 text-[13px] mt-4 border-y-2 border-slate-400">
                <ul className="">
                  {navigation.map((item, index) => {
                    return (
                      <div
                        onClick={() => handleRouting(item.href)}
                        key={index}
                        className={" h-[50px] text-center "}
                      >
                        <li className="py-5 max-lg_new:px-2">
                          <button>{item.name}</button>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="mr-16 flex my-6 max-lg_new:scale-95 max-sm:mx-4 max-sm:my-4">
          <div className="p-1 mx-2 max-sm:scale-75 ">
            <Image src={search} alt="search" height={32} width={32} />
          </div>
          <h1 className="text-[15px] p-1 mt-[3px] max-lg_new:hidden">
            Children
          </h1>
          <div className="p-1 mx-1 max-lg_new:hidden">
            <Image src={bell} alt="bell" height={24} width={24} />
          </div>
          <div className="mx-2 w-8 h-8 rounded-sm bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
}
