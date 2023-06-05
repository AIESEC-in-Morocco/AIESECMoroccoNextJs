import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { NavBar, Container } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";

const events = [
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1hbQDefjDKoxlpJc-t11VR12I_13CMwso/view?usp=drive_link"
    ),
    customer: "*AIESECers only",
    title: "MOROC'CO",
    duration: "4 Days",
    description:
      "MOROC'CO is a conference where the entirety of AIESEC in Morocco meets under one roof, to learn, create and live the Moroccan AIESEC experience.",
    link: "/event-details",
  },
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1PbpFoVjeHcXevdNcnnEmTHFZMw53txJH/view?usp=sharing"
    ),
    customer: "*AIESECers only",
    title: "KICK'OFF",
    duration: "4 Days",
    description:
      "KICK'OFF is a national touchpoint centered around action, its main aim is to build capacity, drive impact and connect the membership to the AIESEC Core.",
    link: "/event-details",
  },
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1FVhUkutTu15XXYzeAM25taqJcl1348zV/view?usp=sharing"
    ),
    customer: "*AIESECers only",
    title: "SUMMER'CO",
    duration: "4 Days",
    description:
      "SUMMER'CO is our third national conference, its main objective is to introduce the New national office to the membership as well as connect the network to one long term goal for the organization.",
    link: "/event-details",
  },
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1mGiS6M1i3Q7MS5KwxS8-bPZkKPcS0T1j/view?usp=drive_link"
    ),
    customer: "*AIESECers only",
    title: "NLC",
    duration: "3 Days",
    description:
      "NLC is a special conference in our conference calendar, it gathers the executives boards of our local chapters, in order to honor the contiuity of the entity,celebrate the achievements of the past year, and ensure the successful planning of the next year.",
    link: "/event-details",
  },
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1NRJLjynF2fmZp7uIGwu_5VhIfhZwSxwi/view?usp=sharing"
    ),
    customer: "*AIESECers only",
    title: "POWER UP",
    duration: "3 Days",
    description:
      "POWER UP is an AIESEC touchpoint that is oriented to external relevance and impact. its main events include a hackathon to solve current issues of Morocco and the world, and to give AIESECers hard and soft skills that are needed for the job market.",
    link: "/event-details",
  },
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1rR8DXnAv_H3eOW26JtG6k0hM86qmK66s/view?usp=sharing"
    ),
    customer: "*FOR ALL YOUTH",
    title: "MGW",
    duration: "1 Week",
    description:
      "Morocco Green Week is an initiative that aims to raise awareness about the socio-economic ecosystem of sustainability and social responsibility through workshops and various activities engaging children, youth and adults to act upon discussed solutions to ensure sustainable development for future generations.",
    link: "/event-details",
  },
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1zXed0PgHPWE57gxTmO4HzmOvi_qUdi8S/view?usp=sharing"
    ),
    customer: "*FOR ALL YOUTH",
    title: "WLL",
    duration: "1 Day",
    description:
      "World’s Largest Lesson is an event to promote the use of the Sustainable Development Goals in learning so that children can contribute to a better future for all.",
    link: "/event-details",
  },
  {
    image: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1h3crkM5alIJou7O0DSN4lGTtPNAWfShx/view?usp=sharing"
    ),
    customer: "*FOR ALL YOUTH",
    title: "Yalla Innovate",
    duration: "2 Days",
    description:
      "YALLA innovate is a series of Hackathons that gather 40-60 people to first bring their ideas to solve a certain issue, sharpen their skills, widen their vision and scale up their projects. YALLA innovate will offer its participants the chance to incubate but also network and learn.",
    link: "/event-details",
  },
];

const AmazingDeals: NextPage = () => {
  return (
    <>
      <Head>
        <title>Events | AIESEC in Morocco</title>
      </Head>

      <NavBar />

      <Container>
        <div className="container mx-auto my-10">
          <div className="text-center">
            <h2 className="text-primary text-5xl font-extrabold mb-5">
              National AIESEC in Morocco Events
            </h2>
            <p className="text-2xl">
              Such events are either organized to create educative spaces for
              the membership, or to promote the SDGs to non AIESECers and spread
              our impact.
            </p>
          </div>
          <div className="flex flex-wrap -mx-3 my-10">
            {events.map((event, index) => (
              <div
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-3 mb-3"
                key={index}
              >
                <div className="bg-white shadow-2xl rounded-lg flex flex-col h-full">
                  <div className="p-4 flex-grow" key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto rounded-lg shadow-md mb-4"
                    />
                    <span className="block bg-primary text-white rounded-full text-sm px-2 py-1 font-semibold">
                      {event.customer}
                    </span>
                    <h4 className="text-primary text-xl font-semibold mt-2 flex items-center">
                      {event.title}
                      <div className="flex-grow"></div>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="ml-2 text-gray-700"
                        />
                        <span className="text-sm text-gray-700 ml-1">
                          {event.duration}
                        </span>
                      </div>
                    </h4>
                    <p className="mt-2 text-lg">{event.description}</p>
                    <div className=" flex-1 mt-auto p-2">
                      <NextLink href={event.link} passHref>
                        <div className="text-white rounded-2xl mt-2 font-extrabold bg-primary p-3 w-fit">
                          Show More
                        </div>
                      </NextLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AmazingDeals;
