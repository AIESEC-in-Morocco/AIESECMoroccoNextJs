// import { PRODUCTS_COLOR } from "@/utils/products_color";
import { Card, CardFooter, Divider } from "@chakra-ui/react";
import { Fade } from "@mui/material";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import { History } from "@/utils/history";
// import GV from "@/assets/logos/GV.svg";
// import GTa from "@/assets/logos/GTa.svg";
// import GTe from "@/assets/logos/GTe.svg";

export const HistoryCards = ({ program }: ProgramCardProps) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const color = History[program].color;
  const description = History[program].description;
  const subtitle = History[program].subtitle;
  return (
    <div className="p-3">
      <Card
        width={"full"}
        borderRadius="md"
        className="mr-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        // onClick={() => router.push(`/program/${program}`)}
      >
        <Fade in={hover} mountOnEnter unmountOnExit>
          <div
            className={clsx(
              "absolute md:h-56 h-40 w-full rounded-t-md bg-gradient-to-t flex flex-col justify-end items-center",
              program == "MOR_1986" && `from-1986`,
              program == "MOR_1996" && `from-1996`,
              program == "MOR_2006" && `from-2006`,
              program == "MOR_2016" && `from-2016`
            )}
          >
            <Fade
              in={hover}
              mountOnEnter
              unmountOnExit
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-[75%] flex flex-col justify-center items-center">
                <h1 className="text-xl sm:font-semibold md:font-bold lg:font-extrabold text-white">
                  {program == "MOR_1986"
                    ? subtitle
                    : program == "MOR_1996"
                    ? subtitle
                    : program == "MOR_2006"
                    ? subtitle
                    : subtitle}
                </h1>
                <p className=" text-white md:text-sm lg:text-base sm:font-normal md:font-semibold">
                  {program == "MOR_1986"
                    ? description
                    : program == "MOR_1996"
                    ? description
                    : program == "MOR_2006"
                    ? description
                    : description}
                  <Divider className="mt-4" borderWidth={1} />
                </p>
              </div>
            </Fade>
          </div>
        </Fade>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={History[program].image}
          alt="image"
          className="md:h-56 h-40 object-cover rounded-t-md"
        />

        <CardFooter
          alignItems="center"
          justifyContent="center"
          backgroundColor={hover ? color : "#0f172a"}
          borderBottomRadius="md"
          className="font-semibold text-center text-white text-lg "
        >
          {History[program].title}
        </CardFooter>
      </Card>
    </div>
  );
};

export interface ProgramCardProps {
  program: "MOR_1986" | "MOR_1996" | "MOR_2006" | "MOR_2016";
}
