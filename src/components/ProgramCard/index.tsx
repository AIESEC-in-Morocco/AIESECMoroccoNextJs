import { PRODUCTS_COLOR } from "@/utils/products_color";
import { Card, CardFooter, Divider } from "@chakra-ui/react";
import { Fade } from "@mui/material";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import GV from "@/assets/logos/GV.svg";
import GTa from "@/assets/logos/GTa.svg";
import GTe from "@/assets/logos/GTe.svg";
import MXP from "@/assets/logos/MXP.svg";

export const ProgramCard = ({ program }: ProgramCardProps) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <Card
      width={"full"}
      borderRadius="md"
      className="md:mr-4 cursor-pointer md:h-56 mb-6 md:mb-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => router.push(`/program/${program}`)}
    >
      <Fade in={hover} mountOnEnter unmountOnExit>
        <div
          className={clsx(
            "absolute md:h-56 h-40 w-full rounded-t-md bg-gradient-to-t flex flex-col justify-end items-center",
            program == "GV" && `from-gv`,
            program == "GTa" && `from-gta`,
            program == "GTe" && `from-gte`,
            program == "MXP" && `from-primary`
          )}
        >
          <Fade
            in={hover}
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-[70%] flex flex-col justify-center items-center">
              {program == "GV" ? (
                <GV className="w-1/2" />
              ) : program == "GTa" ? (
                <GTa className="w-1/2" />
              ) : program == "MXP" ? (
                <MXP className="w-1/2" />
              ) : (
                <GTe className="w-1/2" />
              )}
              <Divider className="delay-200 mt-4" />
            </div>
          </Fade>
        </div>
      </Fade>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PRODUCTS_COLOR[program].image}
        alt="image"
        className="md:h-56 h-40 object-cover rounded-t-md"
      />

      <CardFooter
        alignItems="center"
        justifyContent="center"
        backgroundColor={PRODUCTS_COLOR[program].color}
        borderBottomRadius="md"
        className="font-semibold text-center text-white text-lg"
      >
        {PRODUCTS_COLOR[program].long_term}
      </CardFooter>
    </Card>
  );
};

export interface ProgramCardProps {
  program: "GV" | "GTa" | "GTe" | "MXP";
}
