import { NavBar } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import { Slider } from "@/components/AwsSlider";
import { HistoryCards } from "@/components/HistoryCard";
import Team from "@/components/Team";
import { Footer } from "@/components/Footer";
import { background } from "@chakra-ui/react";
import { url } from "inspector";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboutUs</title>
      </Head>
      <NavBar />
      <div className="w-full h-screen" style={{backgroundImage:' url( "hero-image.jpg" ) ', backgroundAttachment: "fixed", backgroundSize: "cover"}}>
        {/* eslint-disable-next-line @next/next/no-img-element */}

        {/* Might need this in the future for the hero image */}
        
        {/* <img
          src={getImageFromGoogleDrive(
            "https://drive.google.com/file/d/1ev9R4IvCF0ZPeiXNWllPCVgmLLuGp1zo/view?usp=share_link"
          )}
          alt="Hero Background"
          width={1920}
          height={1080}
          className="object-cover object-center w-full h-full"
          style={{ backgroundAttachment: "fixed"}}
        /> */}
       
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl p-5 sm:p-10 mr-5 sm:mr-10 md:mr-32  bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur">
          <h1 className="text-base sm:text-lg md:text-2xl text-white mb-4 text-center">
            AIESEC in Morocco
          </h1>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Discover our culture
          </h1>
          <div className="px-10 sm:px-20 md:-32">
            <p className="text-sm sm:text-base md:text-lg text-white text-center">
              Our mission is to help developping more moroccan youth for a
              better future of our country and for the world. We do that by
              spreading our impact nationally and helping many youth. Daring to
              reach the optimum state
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <div className="bg-white relative">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-black mb-4 text-center">
          Our History
        </h1>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b" />
        <div className="flex w-full justify-between  md:flex-row flex-col ">
          <HistoryCards program="MOR_1986" />
          <HistoryCards program="MOR_1996" />
          <HistoryCards program="MOR_2006" />
          <HistoryCards program="MOR_2016" />
        </div>
      </div>
      <div className="bg-white relative">
        <Team />
      </div>
      <div className="bg-white relative pb-24">
        <img
          src={getImageFromGoogleDrive(
            "https://drive.google.com/file/d/1Hy_nfvtH9bbFqcYramGYrQOz9hNbSjhI/view?usp=share_link"
          )}
          alt="Hero Background"
          width={1920}
          height={1080}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
