import { PRODUCTS_COLOR } from "@/utils/products_color";
import { useRouter } from "next/router";
import { Divider } from "@chakra-ui/react";
import Link from "next/link";

export const ProgramCard = ({ program }: ProgramCardProps) => {
  // const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <div className="relative mx-4 w-full ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-[60%] rounded-l-lg"
        src={PRODUCTS_COLOR[program].image}
        alt="img"
      />
      <div className="w-[90%] z-10 h-72 rounded-lg shadow-md p-4 bg-white absolute top-[75px] left-[49px]">
        <h1 className="font-sans font-semibold w-full text-lg">
          {PRODUCTS_COLOR[program].long_term}
        </h1>
        <Divider orientation="horizontal" mt={4} mb={4} />
        <h2 className="font-sans font-semibold w-full text-sm">
          {PRODUCTS_COLOR[program].short_abrev}
        </h2>
        <p className="font-sans w-full text-sm mt-2 text-gray-500">
          {PRODUCTS_COLOR[program].description}
        </p>
        <button
          // href={`/program/${program}`}
          className="inline-block rounded mt-4 border w-full text-center border-primary bg-primary px-10 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          {PRODUCTS_COLOR[program].button}
        </button>
      </div>
    </div>
  );
  // return (
  //   <Card
  //     width={"full"}
  //     borderRadius="md"
  //     className="md:mr-4 cursor-pointer md:h-56 mb-6 md:mb-0"
  //     onMouseEnter={() => setHover(true)}
  //     onMouseLeave={() => setHover(false)}
  //     onClick={() => router.push(`/program/${program}`)}
  //   >
  //     <Fade in={hover} mountOnEnter unmountOnExit>
  //       <div
  //         className={clsx(
  //           "absolute md:h-56 h-40 w-full rounded-t-md bg-gradient-to-t flex flex-col justify-end items-center",
  //           program == "GV" && `from-gv`,
  //           program == "GTa" && `from-gta`,
  //           program == "GTe" && `from-gte`,
  //           program == "MXP" && `from-primary`
  //         )}
  //       >
  //         <Fade
  //           in={hover}
  //           mountOnEnter
  //           unmountOnExit
  //           style={{ transitionDelay: "200ms" }}
  //         >
  //           <div className="w-[70%] flex flex-col justify-center items-center">
  //             {program == "GV" ? (
  //               <GV className="w-1/2" />
  //             ) : program == "GTa" ? (
  //               <GTa className="w-1/2" />
  //             ) : program == "MXP" ? (
  //               <MXP className="w-1/2" />
  //             ) : (
  //               <GTe className="w-1/2" />
  //             )}
  //             <Divider className="delay-200 mt-4" />
  //           </div>
  //         </Fade>
  //       </div>
  //     </Fade>

  //     {/* eslint-disable-next-line @next/next/no-img-element */}
  //     <img
  //       src={PRODUCTS_COLOR[program].image}
  //       alt="image"
  //       className="md:h-56 h-40 object-cover rounded-t-md"
  //     />

  //     <CardFooter
  //       alignItems="center"
  //       justifyContent="center"
  //       backgroundColor={PRODUCTS_COLOR[program].color}
  //       borderBottomRadius="md"
  //       className="font-semibold text-center text-white text-lg"
  //     >
  //       {PRODUCTS_COLOR[program].long_term}
  //     </CardFooter>
  //   </Card>
  // );
};

export interface ProgramCardProps {
  program: "GV" | "GTa" | "GTe" | "MXP";
}
