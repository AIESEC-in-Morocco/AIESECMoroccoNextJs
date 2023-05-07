import { Grid, GridItem } from "@chakra-ui/react";
import DI from "@/assets/valuesIcons/DemonstratingIntegrity.svg";
import SE from "@/assets/valuesIcons/StrivingForExcellence.svg";
import EP from "@/assets/valuesIcons/EnjoyingParticipation.svg";
import AS from "@/assets/valuesIcons/ActingSustainably.svg";
import AL from "@/assets/valuesIcons/ActivatingLeadership.svg";
import LD from "@/assets/valuesIcons/LivingDiversity.svg";

const values = [
  {
    icon: <DI className="w-14 h-14" />,
    text: "Demonstrating Integrity",
    description:
      "By doing what's right over what's easy, you develop leadership that demonstrates integrity.",
  },
  {
    icon: <SE className="w-14 h-14" />,
    text: "Striving for Excellence",
    description:
      "By taking up challenging opportunities with AIESEC, you get to continuously grow through creativity and innovation.",
  },
  {
    icon: <EP className="w-14 h-14" />,
    text: "Enjoying Participation",
    description:
      "At AIESEC, you get to celebrate and enjoy the way we are and put your youthful energy and enthusiasm in everything you do.",
  },
  {
    icon: <AS className="w-14 h-14" />,
    text: "Acting Sustainably",
    description:
      "In various leadership roles at AIESEC, you get to make long-term decisions that build your mindset to also think of your future generations and live sustainably.",
  },
  {
    icon: <AL className="w-14 h-14" />,
    text: "Activating Leadership",
    description:
      "At AIESEC, you get to lead by example and with empathy by taking responsibility of inspiring others to lead as well.",
  },
  {
    icon: <LD className="w-14 h-14" />,
    text: "Living Diversity",
    description:
      "You get to work in inclusive spaces that allow you to truly be yourself and embrace each others' differences as a strength.",
  },
];

export const Values = ({}: ValuesProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(3, 1fr)">
      <GridItem colSpan={2} rowSpan={1}>
        <h2 className="text-5xl text-center font-semibold">Our Values</h2>
      </GridItem>
      {values.map((value, index) => (
        <GridItem key={index} colSpan={1} rowSpan={2} mx={4} mb={4}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem"}}
          >
            {value.icon}
            <div className="text-lg text-justify font-semibold ml-5">{value.text}</div>
          </div>
          <div className="text-base text-justify">{value.description}</div>
        </GridItem>
      ))}
    </Grid>
  );
};

export interface ValuesProps {}
