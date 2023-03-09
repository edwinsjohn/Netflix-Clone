import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import GetStarted from "@/components/getStarted/GetStarted";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/browse");
  }, []);
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix clone app v.1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  bg-netflix_bg">
        <GetStarted />
      </main>
    </>
  );
}
