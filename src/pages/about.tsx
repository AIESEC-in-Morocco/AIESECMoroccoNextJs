import { NavBar } from "@/components";
import type { NextPage } from "next";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Head from "next/head";
import Image from "next/image";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import { Slider } from "@/components/AwsSlider";

// import { Swiper } from "@/components/Swiper";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <>
      <Head>
        <title>AboutUs</title>
      </Head>

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
          <div className="">
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
      </div>
      {/* <Swipers></Swipers> */}
      {/* <div className="relative bg-white py-20">
        <div className="relative mx-32">
          <AiOutlineLeft
            onClick={handlePrevSlide}
            className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
          />
          <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
            <Swipe
              onSwipeLeft={handleNextSlide}
              onSwipeRight={handlePrevSlide}
              className="relative z-10 w-full h-full"
            >
              {images.map((image, index) => {
                if (index === currentSlide) {
                  return (
                    <Image
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="contain"
                      className="animate-fadeIn"
                    />
                  );
                }
              })}
            </Swipe>
          </div>
          <AiOutlineRight
            onClick={handleNextSlide}
            className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
          />

          <div className="relative flex justify-center p-2">
            {images.map((_, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div> */}
      <Slider></Slider>
    </>
  );
};

export default AboutUs;
