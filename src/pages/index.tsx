import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import About from "../components/about/About";
import Guides from "../components/guide/Guides";
import Blog from "../components/blog/Blog";
import Mission from "../components/mission/Mission";
import Notifyme from "../components/notify/Notifyme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BharatSinghdev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Guides />
      <Blog />
      <Mission />
      <Notifyme />
    </>
  );
}
