import React from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";

const WiA = () => {
  return (
    <Grid
      templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)"}}
      gap={4}
      className="flex flex-col md:flex-row my-5"
      autoRows={"1fr"}
    >
      <GridItem
        colSpan={{ sm: 2, md: 2}}
        className="order-1 md:order-2"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
      >
        {/* Content for 1/3 column on top for small screens, and on the left for larger screens */}
        <img
          src={getImageFromGoogleDrive(
            "https://drive.google.com/file/d/1GOHeJVomNfViOJgB_3MtH0C9YFObU8kZ/view?usp=share_link"
          )}
          alt="My Image"
          style={{ borderRadius: "5%", maxWidth: "100%", display: "block", margin: "auto", maxHeight: "100%" }}
        />
      </GridItem>
      <GridItem
        colSpan={{ sm: 2, md: 1}}
        className="order-2 md:order-1"
        display="flex"
      >
        {/* Content for 2/3 column on bottom for small screens, and on the right for larger screens */}
        <div className="lg:pr-24">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">What is AIESEC?</h2>
            <p className="mb-8">
              AIESEC is a community of young people, passionately driven by one
              cause: peace and fulfilment of humankind’s potential.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-grey rounded-lg p-8">
              <h4 className="text-2xl font-bold">109+</h4>
              <span className="text-primary font-semibold text-sm">Countries &amp; Territories</span>
            </div>
            <div className="bg-grey rounded-lg p-8">
              <h4 className="text-2xl font-bold">5000+</h4>
              <span className="text-primary font-semibold text-sm">Partner Organizations</span>
            </div>
            <div className="bg-grey rounded-lg p-8">
              <h4 className="text-2xl font-bold">30.000+</h4>
              <span className="text-primary font-semibold text-sm">Experiences Every Year</span>
            </div>
            <div className="bg-grey rounded-lg p-8">
              <h4 className="text-2xl font-bold">75</h4>
              <span className="text-primary font-semibold text-sm">Years of impact</span>
            </div>
          </div>
          <p className="mb-8">
            AIESEC is a global platform for young people to develop their
            leadership potential through practical experiences of many kinds,
            including internships, volunteering opportunities, and more. Founded
            in 1948, AIESEC is a non-governmental and not-for-profit
            organization entirely run by youth for youth.
          </p>
          <div className="text-start">
            <a
              href="https://aiesec.org/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-black text-white font-bold py-3 px-6 rounded-full"
            >
              Discover More
            </a>
          </div>
        </div>
      </GridItem>
    </Grid>
  );
};

export default WiA;
