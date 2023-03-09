import React, { FC, useState } from "react";
import Link from "next/link";
import section1_bg_banner from "../../public/assets/bg-banner/IN-signup-bg-banner.jpg";
import Image from "next/image";
import netflix_logo from "../../public/assets/logos/netflix_logo_icon.svg";
const GetStarted = (props: any) => {
  const [emailVal, setEmail] = useState("");
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const setEmailToStorage = () => {
    localStorage.setItem("userEmailId", emailVal);
  };

  return (
    <div className=" h-screen bg-[#222222]">
      <section className=" h-[505px] sm:h-[740px] w-[100%] bg-[#222222] text-white">
        <div className="relative h-[500px] sm:h-[735px] w-[100%]">
          <Image
            src={section1_bg_banner}
            alt="bg-banner"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className=" absolute w-[100%] h-[735px] bg-gradient-to-b from-black via-transparent to-black pt-3">
            <div className="flex justify-between">
              <div className=" w-[110px] h-[53px] md:w-[190px] md:h-[90px] relative ml-3 md:ml-[35px]">
                <Image alt="Netflix" src={netflix_logo} fill></Image>
              </div>
              <div className="flex">
                <div className=" w-[80px] h-[28px] bg-transparent border-[1px] border-[#8e8c8b] m-2 mt-3 rounded-sm">
                  🌐English
                </div>
                <div className=" w-[70px] h-[28px] bg-[#ff0000] rounded-md m-3 text-center font">
                  Sign In
                </div>
              </div>
            </div>
            <div className=" text-center m-8 mb-4 mt-10">
              <h1 className=" text-3xl font-semibold">
                Unlimited movies, TV shows and more.
              </h1>
              <h1 className=" text-xl my-2">Watch anywhere. Cancel anytime.</h1>
              <h1 className=" text-xl ">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h1>
            </div>
            <form action="/signup" method="post">
              <div className="flex  w-[100%] place-content-center">
                <input
                  onChange={handleEmailChange}
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className=" w-[19rem] bg-white p-3 text-[#222222]"
                />
              </div>
              <div className="flex justify-center">
                <Link
                  href={{ pathname: "signup/step", query: { email: emailVal } }}
                  legacyBehavior
                >
                  <a
                    className=" bg-[#ff0000] p-2 px-4 m-5"
                    onClick={setEmailToStorage}
                  >
                    Get Started &gt;
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
