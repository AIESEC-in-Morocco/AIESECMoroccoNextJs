import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import Image from "next/image";
import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

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

const AutoplaySliderComponent = withAutoplay(AwesomeSlider);

// const CaptionedSlider = CaptionedHoc(AutoplaySliderComponent);

export const Slider = () => {
  return (
    <div className="relative p-24 pt-10 bg-white">
      <div className="shadow-[20px_35px_60px_10px_rgba(0,0,0,0.3)] p-5 max-sm:pb-12 sm:p-12 md:p-16 lg:p-24 lg:pt-5 md:pt-5 sm:pt-5 rounded-[0.9rem]">
        <p className="text-lg md:text-xl sm:text-lg lg:text-5xl pb-3 font-semibold">
          {" "}
          <span className="text-[#477dee]">AIESEC </span> in 12 cities
        </p>
        <AutoplaySliderComponent
          play={false}
          cancelOnInteraction={false}
          interval={10000}
          // cssModule={AwesomeSliderStyles}
          // animation="cubeAnimation"
          style={{ width: "100%", height: "30rem" }}
        >
          {images.map((image) => (
            <div key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <h1 className="relative text-white text-2xl text-center bg-black bg-opacity-50 py-2 px-2 rounded mt-96 font-bold">
                {/* <ReactTypingEffect
                  // eraseDelay={10000}
                  typingDelay={0}
                  cursor="|"
                  text={image.alt}
                /> */}
                {image.alt}
              </h1>
            </div>
          ))}
        </AutoplaySliderComponent>
      </div>
    </div>
  );
};
