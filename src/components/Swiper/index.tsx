// Import Swiper React components
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";

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
export const Swipers = () => {
  return (
    <div className="relative bg-white py-20">
      <div className="relative mx-32">
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation={true}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          spaceBetween={10}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  className="object-contain relative z-10 h-96  w-full  rounded-2xl shadow-2xl  bg-gray-100  bg-opacity-50  backdrop-filter backdrop-blur-sm  border-2 border-gray-200  border-opacity-50"
                  style={{ position: "fixed" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
