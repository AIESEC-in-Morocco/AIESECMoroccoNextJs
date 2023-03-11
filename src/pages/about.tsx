import { NavBar } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import heroImage from "./public/hero-image.jpg";
import getImagaFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import { background } from "@chakra-ui/react";
import { color } from "framer-motion";

const AboutUs: NextPage = () => {
  return (
    <>
      <html className="scroll-auto">
        <Head>
          <title>AboutUs</title>
        </Head>

        <div className=" w-full h-screen">
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
          <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl p-20 mr-20 md:mr-32  bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur">
            <div className="">
              <h1 className="text-xl md:text-2xl text-white mb-4 text-center">
                AIESEC in Morocco
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Discover our culture
              </h1>
              <div className="px-32">
                <p className="text-base md:text-lg text-white text-center">
                  Our mission is to help developping more moroccan youth for a
                  better future of our country and for the world. We do that by
                  spreading our impact nationally and helping many youth. Daring
                  to reach the optimum state
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Our Mission
            </h1>
            <div className="px-32">
              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>
            </div>
          </div>
        </div>
        <div className="my-96 relative bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Our Mission
            </h1>
            <div className="px-32">
              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>

              <p className="text-base md:text-lg text-dark text-center">
                Our mission is to help developping more moroccan youth for a
                better future of our country and for the world. We do that by
                spreading our impact nationally and helping many youth. Daring
                to reach the optimum state
              </p>
            </div>
          </div>
        </div>
      </html>
    </>
  );
};

export default AboutUs;
