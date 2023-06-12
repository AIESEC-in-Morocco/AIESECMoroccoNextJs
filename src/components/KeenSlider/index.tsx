import Slider from "react-slick";
// import Image from "next/image";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import getEntities from "@/queries/getEntities";
import { useQuery } from "@tanstack/react-query";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const images = [
//   {
//     movement: "the TANGERIENCE",
//     vision: "DYNAMIZE: Dynamic Growth, Limitless Potential",
//     city: "Tangier",
//     src: "https://drive.google.com/uc?id=13b4N2sv6kFAXP78mVE5ZcRK2_V6LfF4N",
//   },
//   {
//     movement: "Casawe Spirit",
//     vision: "Fire Meeting Gasoline",
//     city: "Casablanca",
//     src: "https://drive.google.com/uc?id=1UoZv7vI1n1AI7wE5SECSm2XS1DC8Jw-I",
//   },
//   {
//     movement: "Wolves of Mohammedia",
//     vision: "Revival Wolves",
//     city: "Mohammedia",
//     src: "https://drive.google.com/uc?id=10WL4NprLWyO-1CkJvQ_Hhz25hH7Tvk09",
//   },
//   {
//     movement: "Hellala",
//     vision: "Driving the way forward to reach the Zenith",
//     city: "Kenitra",
//     src: "https://drive.google.com/uc?id=1-AFt6Y-xPyXj3zUmaGG4PkZM_r59yDrP",
//   },
//   {
//     movement: "BigBang",
//     vision: "Rewind the BigBang",
//     city: "Beni Mellal",
//     src: "https://drive.google.com/uc?id=1Ix39aUQ41uL9V5YUy6oRxOcvzBLvI0uT",
//   },
//   {
//     movement: "Lions",
//     vision: "Blazing the path to success",
//     city: "Ifrane",
//     src: "https://drive.google.com/uc?id=1mXt1yKQmYRnZhzcxZaPrd9nOyFlbO-T9",
//   },
//   {
//     movement: "The Fezberg Movement",
//     vision: "Magnifying the Luster",
//     city: "Fez",
//     src: "https://drive.google.com/uc?id=1Upr5vWj1vR79wRprNHZNFvllbtprUaRG",
//   },
// ];

const EntitiesSlider = () => {
  const { data, isSuccess } = useQuery(["getEntities"], () => getEntities, {
    cacheTime: 20 * 60 * 1000,
  });

  const testimonials_settings = {
    dots: true,
    infinite: true,
    arrows: false,
    // centerMode: true,
    // centerPadding: "20% 0 0",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
  };

  return (
    <Slider className="mt-8 w-full" {...testimonials_settings}>
      {isSuccess &&
        data?.data.result.map((entity) => {
          return (
            <div className="flex md:h-[70vh] w-full pr-8 " key={entity.city}>
              <div className="md:w-full md:h-full h-48 hidden md:block relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="object-cover grayscale w-full h-full rounded-t-md md:rounded-t-none md:rounded-l-md md:rounded-tl-md"
                  alt="image"
                  src={getImageFromGoogleDrive(entity.image_link)}
                />
                <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute bg-black/30" />
                <div className="absolute bottom-4 left-8">
                  <h1 className="text-white text-2xl font-semibold">
                    {entity.movement_name}{" "}
                    <span className="font-thin">- {entity.city}</span>
                  </h1>
                  <h1 className="text-white text-lg">{entity.vision}</h1>
                </div>
              </div>
            </div>
          );
        })}
    </Slider>
  );
};

export default EntitiesSlider;
