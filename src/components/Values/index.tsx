import { Grid, GridItem } from "@chakra-ui/react";

const values = [
    "Integrity",
    "Excellence",
    "Innovation",
    "Collaboration",
    "Customer Focus",
    "Respect"
  ];

export const Values = ({}:ValuesProps) => {
 return (
<Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={6} my={8}>
      <GridItem colSpan={{ sm: 1, md: 3 }}>
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
      </GridItem>
      {values.map((value, index) => (
        <GridItem key={index} colSpan={{ sm: 1, md: 1 }}>
          <div className="text-lg font-medium">{value}</div>
        </GridItem>
      ))}
    </Grid>
 );

};

export interface ValuesProps {}