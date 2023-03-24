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
  return (
    <Card
      width={"full"}
      borderRadius="md"
      className="md:mr-4 cursor-pointer"
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
            <div className="w-[75%] flex flex-col justify-center items-center text-white font-semibold">
              {program == "MOR_1986"
                ? description
                : program == "MOR_1996"
                ? description
                : program == "MOR_2006"
                ? description
                : description}
              <Divider className="font-bold mt-4" />
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
        backgroundColor={hover ? color : "grey"}
        borderBottomRadius="md"
        className="font-semibold text-center text-white text-lg"
      >
        {History[program].title}
      </CardFooter>
    </Card>
  );
};

export interface ProgramCardProps {
  program: "MOR_1986" | "MOR_1996" | "MOR_2006" | "MOR_2016";
}
