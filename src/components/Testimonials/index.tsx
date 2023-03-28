import BlockQuote from "@/assets/logos/blockquote";

export const Testimonials = ({ name }: TestimonialsProps) => {
  return (
    <div className="flex h-[70vh]  w-full pr-8 flex-col md:flex-row">
      <div className="w-8/12 h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-full h-full  md:rounded-l-md"
          src={
            "https://images.unsplash.com/photo-1618477460930-d8bffff64172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          alt="image"
        />
      </div>
      <div className="w-full h-full bg-gv/20 md:rounded-r-md flex flex-col justify-center items-start p-8">
        <BlockQuote height={"50px"} width={"50px"} fill={"#f85a40"} />

        <blockquote className="pt-8">
          <p className="md:text-xl font-sans font-light text-black">
            AIESEC helped me to achieve one my career goals which is having a
            professional experience abroad. I learned several things during this
            opportunity such as connecting with people from different cultures,
            collaborating with businessmen to invite them to the forum (world
            cooperation industries forum) I was working on with Bosphorus expo.
            It was an honour to be part of this project and I&apos;m thankful to
            AIESEC for giving me this wonderful opportunity
          </p>
          <h5 className="mt-8 font-sans font-semibold text-black">
            Random Name<span className="font-sans font-light">, Ukrain</span>
          </h5>
          <h5 className="text-gray-500 font-sans font-thin ">
            Volunteered in Ukrain
          </h5>
        </blockquote>
      </div>
    </div>
  );
};

export interface TestimonialsProps {
  name: string;
  // testimonial: string;
  // country: string;
  // picture_link: string;
}
