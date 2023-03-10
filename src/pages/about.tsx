import { NavBar } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import heroImage from "./public/hero-image.jpg";
import getImagaFromGoogleDrive from "@/utils/getImageFromGoogleDrive";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboutUs</title>
      </Head>

      <NavBar></NavBar>

      <div className="relative w-full h-screen">
        <Image
          src={getImagaFromGoogleDrive(
            "https://drive.google.com/file/d/1ev9R4IvCF0ZPeiXNWllPCVgmLLuGp1zo/view"
          )}
          alt="Hero Background"
          layout="fill"
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl p-20 md:px-40 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Welcome to our website
          </h1>
          <p className="text-base md:text-lg text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan libero nec augue aliquet, eget posuere urna feugiat.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
