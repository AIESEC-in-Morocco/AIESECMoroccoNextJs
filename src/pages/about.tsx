import { NavBar } from "@/components";
import type { NextPage } from "next";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import Image from "next/image";
import getImagaFromGoogleDrive from "@/utils/getImageFromGoogleDrive";

const images = [
  {
    id: 1,
    alt: "Lions",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/1Do-42ySiGjnesghP92zq8CWTzI0Me6Jk/view?usp=sharing"
    ),
  },
  {
    id: 2,
    alt: "Beware_Hellala",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/1E1o9iIrJ75n6Uj9J_HudVSVoiA1J31vH/view?usp=sharing"
    ),
  },
  {
    id: 3,
    alt: "Mekcellence",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/1CMG254iKE1tantX0OU_L_DyW30rDZbhl/view?usp=share_link"
    ),
  },
  {
    id: 4,
    alt: "Wolves",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/1F33Eb4w4Y-EQHnD5pzRT-LQx2y-MbhvV/view?usp=share_link"
    ),
  },
  {
    id: 5,
    alt: "Gadirians",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/1oFviRqm7qPaJPkyCi760w5-vbcUHVEDi/view?usp=share_link"
    ),
  },
  {
    id: 6,
    alt: "Soldiers",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/19F23h3nMN65_bYcH0ZqlHjUKkTmGgcAb/view?usp=share_link"
    ),
  },
  {
    id: 7,
    alt: "Casawe_spirit",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/1Smcx4BrMdNXsxCZYeS4-G3HrNF-yNfyT/view?usp=share_link"
    ),
  },
  {
    id: 8,
    alt: "Fezberg",
    src: getImagaFromGoogleDrive(
      "https://drive.google.com/file/d/1Smcx4BrMdNXsxCZYeS4-G3HrNF-yNfyT/view?usp=share_link"
    ),
  },
];

const AboutUs: NextPage = () => {
  return (
    <>
      <html className="scroll-auto">
        <Head>
          <title>AboutUs</title>
        </Head>

        <div className="w-full h-screen">
          <Image
            src={getImagaFromGoogleDrive(
              "https://drive.google.com/file/d/1ev9R4IvCF0ZPeiXNWllPCVgmLLuGp1zo/view?usp=share_link"
            )}
            alt="Hero Background"
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-full"
            quality={100}
            style={{ position: "fixed" }}
          />
          <NavBar></NavBar>
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
        {/* <div className="relative bg-white cities-town">
          <div className="container">
            <div className="row">
              <div className="slider-content">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="text-center mb-8">
                      AIESEC in <em>12 Cities</em>
                    </h2>
                  </div>
                  <div className="col-lg-12">
                    <div className="owl-cites-town owl-carousel owl-loaded owl-drag">
                      {cities.map((city) => (
                        <div className="item" key={city.name}>
                          <div className="thumb">
                            <Image
                              src={city.image}
                              alt={city.name}
                              width={285}
                              height={200}
                            />
                            <h4>{city.name}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Carousel
          showStatus={false}
          showThumbs={false}
          // selectedItem={currentSlide}
          // onChange={handleSlideChange}
        >
          {images.map((image) => (
            <div key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                layout="responsive"
              />
            </div>
          ))}
        </Carousel>
      </html>
    </>
  );
};

export default AboutUs;
