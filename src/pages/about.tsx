import { NavBar, Container } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import { Slider } from "@/components/AwsSlider";
import { HistoryCards } from "@/components/HistoryCard";
import Team from "@/components/Team";
import { Footer } from "@/components/Footer";
import WiS from "@/components/AboutHeader";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboutUs</title>
      </Head>
      <NavBar />
      <Container>
        <WiS />
        <Slider />
        <div className="">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-black mb-4 text-center">
            Our History
          </h1>
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
        <Footer />
      </Container>
    </>
  );
};

export default AboutUs;
