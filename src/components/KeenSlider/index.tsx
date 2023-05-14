import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import React, { useState } from "react";

const images = [
  {
    movement: "the TANGERIENCE",
    vision: "DYNAMIZE: Dynamic Growth, Limitless Potential",
    city: "Tangier",
    src: "https://drive.google.com/uc?id=13b4N2sv6kFAXP78mVE5ZcRK2_V6LfF4N",
  },
  {
    movement: "Casawe Spirit",
    vision: "Fire Meeting Gasoline",
    city: "Casablanca",
    src: "https://drive.google.com/uc?id=1UoZv7vI1n1AI7wE5SECSm2XS1DC8Jw-I",
  },
  {
    movement: "Wolves of Mohammedia",
    vision: "Revival Wolves",
    city: "Mohammedia",
    src: "https://drive.google.com/uc?id=10WL4NprLWyO-1CkJvQ_Hhz25hH7Tvk09",
  },
  {
    movement: "Hellala",
    vision: "Driving the way forward to reach the Zenith",
    city: "Kenitra",
    src: "https://drive.google.com/uc?id=1-AFt6Y-xPyXj3zUmaGG4PkZM_r59yDrP",
  },
  {
    movement: "BigBang",
    vision: "Rewind the BigBang",
    city: "Beni Mellal",
    src: "https://drive.google.com/uc?id=1Ix39aUQ41uL9V5YUy6oRxOcvzBLvI0uT",
  },
  {
    movement: "Lions",
    vision: "Blazing the path to success",
    city: "Ifrane",
    src: "https://drive.google.com/uc?id=1mXt1yKQmYRnZhzcxZaPrd9nOyFlbO-T9",
  },
  {
    movement: "The Fezberg Movement",
    vision: "Magnifying the Luster",
    city: "Fez",
    src: "https://drive.google.com/uc?id=1Upr5vWj1vR79wRprNHZNFvllbtprUaRG",
  },
];

const Slider = () => {
  //   const [sliderRef, instanceRef] = useKeenSlider(
  //     {
  //       slideChanged() {
  //         console.log("slide changed");
  //       },
  //     },
  //     [
  //       // add plugins here
  //     ]
  // );

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      mode: "free-snap",
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="my-10">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider h-[28rem] ">
            {images.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <img
                  src={image.src}
                  alt={image.movement}
                  width={1920}
                  className="mx-auto object-center object-contain mt-[-20%]"
                ></img>
                <div className="text-center font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-2 rounded-xl">
                  <p className="text-3xl">{image.movement}</p>
                  <p className="">{image.vision}</p>
                </div>
                <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white font-extrabold text-center text-2xl p-2">
                  {image.city}
                </div>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Slider;
