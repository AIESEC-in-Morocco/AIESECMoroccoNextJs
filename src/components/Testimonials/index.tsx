import BlockQuote from "@/assets/logos/blockquote";
import { useSanityImage } from "@/integrations/sanity";
import { PRODUCTS_COLOR } from "@/utils/products_color";
import clsx from "clsx";
import { UseNextSanityImageProps } from "next-sanity-image";

export const Testimonials = ({
  name,
  testimonial,
  country,
  image,
  origin_city,
  program,
}: TestimonialsProps) => {
  const imageProps = useSanityImage(image);

  return (
    <div className="flex md:h-[70vh] w-full pr-8 flex-col md:flex-row">
      <div className="md:w-8/12 md:h-full h-48 hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-full h-full rounded-t-md md:rounded-t-none md:rounded-l-md md:rounded-tl-md"
          alt="image"
          src={imageProps?.src}
          width={imageProps?.width}
          height={imageProps?.height}
        />
      </div>
      <div
        className={clsx(
          "w-full h-full md:rounded-r-md flex flex-col justify-center items-start p-8",
          program == "GV" && "bg-gv/20",
          program == "GTa" && "bg-gta/20",
          program == "GTe" && "bg-gte/20",
          program == "MXP" && "bg-primary/20"
        )}
      >
        <BlockQuote
          height={"50px"}
          width={"50px"}
          fill={PRODUCTS_COLOR[program].color}
        />

        <blockquote className="pt-8">
          <p className="md:text-xl font-sans font-light text-black overflow-y-scroll md:overflow-hidden md:h-auto h-96">
            {testimonial}
          </p>
          <h5 className="mt-8 font-sans font-semibold text-black">
            {name}
            <span className="font-sans font-light">, {origin_city}</span>
          </h5>
          <h5 className="text-gray-500 font-sans font-thin ">
            {program == "GV"
              ? "Volunteered in"
              : program == "GTa"
              ? "Interned  in"
              : program == "MXP"
              ? "AIESECer from"
              : "Taught in"}{" "}
            {country}
          </h5>
        </blockquote>
      </div>
    </div>
  );
};

export interface TestimonialsProps {
  name: string;
  testimonial: string;
  country: string;
  image: any;
  origin_city: string;
  program: "GV" | "GTa" | "GTe" | "MXP";
}
