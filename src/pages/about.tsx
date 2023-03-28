import { NavBar } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import { Slider } from "@/components/AwsSlider";
import { HistoryCards } from "@/components/HistoryCard";
import Example from "@/components/Team";

const images = [
  {
    id: 1,
    alt: "Lions",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1Do-42ySiGjnesghP92zq8CWTzI0Me6Jk/view?usp=sharing"
    ),
  },
  {
    id: 2,
    alt: "Beware_Hellala",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1E1o9iIrJ75n6Uj9J_HudVSVoiA1J31vH/view?usp=sharing"
    ),
  },
  {
    id: 3,
    alt: "Mekcellence",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1CMG254iKE1tantX0OU_L_DyW30rDZbhl/view?usp=share_link"
    ),
  },
  {
    id: 4,
    alt: "Wolves",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1F33Eb4w4Y-EQHnD5pzRT-LQx2y-MbhvV/view?usp=share_link"
    ),
  },
  {
    id: 5,
    alt: "Gadirians",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1oFviRqm7qPaJPkyCi760w5-vbcUHVEDi/view?usp=share_link"
    ),
  },
  {
    id: 6,
    alt: "Soldiers",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/19F23h3nMN65_bYcH0ZqlHjUKkTmGgcAb/view?usp=share_link"
    ),
  },
  {
    id: 7,
    alt: "Casawe_spirit",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1Smcx4BrMdNXsxCZYeS4-G3HrNF-yNfyT/view?usp=share_link"
    ),
  },
  {
    id: 8,
    alt: "Fezberg",
    src: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1Vl0qvK6Ya5pP1OCMGOZZA-26QfMHvUK8/view?usp=share_link"
    ),
  },
];

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboutUs</title>
      </Head>
      <div style={{}}>
        <div className="w-full h-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageFromGoogleDrive(
              "https://drive.google.com/file/d/1ev9R4IvCF0ZPeiXNWllPCVgmLLuGp1zo/view?usp=share_link"
            )}
            alt="Hero Background"
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-full"
            style={{ position: "fixed" }}
          />
          <NavBar />
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
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
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
          <Example />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
