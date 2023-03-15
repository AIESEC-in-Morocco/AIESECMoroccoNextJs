import { PRODUCTS_COLOR } from "@/utils/products_color";
import { Card, CardBody, CardFooter, Divider } from "@chakra-ui/react";
import { Fade } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";

export const ProgramCard = ({ program }: ProgramCardProps) => {
  const [hover, setHover] = useState(false);
  console.log("hover: ", hover);
  return (
    <Card
      width={"full"}
      borderRadius="md"
      className="md:mr-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Fade in={hover} mountOnEnter unmountOnExit>
        <div
          className={clsx(
            "absolute md:h-56 h-40 w-full rounded-t-md bg-gradient-to-t flex flex-col justify-end items-center",
            program == "GV" && `from-gv`,
            program == "GTa" && `from-gta`,
            program == "GTe" && `from-gte`
          )}
        >
          <Fade
            in={hover}
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: "200ms" }}
          >
            <Divider className="delay-200" w={"75%"} />
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
  program: "GV" | "GTa" | "GTe";
}
