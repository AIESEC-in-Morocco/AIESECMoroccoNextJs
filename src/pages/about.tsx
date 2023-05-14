import { NavBar, Container } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
// import { Slider } from "@/components/AwsSlider";
import { HistoryCards } from "@/components/HistoryCard";
import Team from "@/components/Team";
import { Footer } from "@/components/Footer";
import WiS from "@/components/AboutHeader";
import { Values } from "@/components/Values";
import Slider from "@/components/KeenSlider";
import FAQ from "@/components/FAQs";

const faqs = [
  {
    question: "What's AIESEC ?",
    answer:
      "AIESEC is an entirely youth-led not-for-profit organisation present in over 100 countries and territories, and active since 1948. We provide young people with the opportunity to grow and learn in an exciting new environment, undertaking enriching cross-cultural experiences while having a positive impact on world and developing relevant skills for their future careers.",
  },
  {
    question: "What is AIESEC’s goal?",
    answer:
      "AIESEC aims to develop leadership in every young person around the world, because to make a change in this world, you need to be a decision maker, you can become that way, if you have a developed leader inside you, which can only happen through putting yourself into challenging environment and to be open to the world and this is exactly what we do in AIESEC we provide exchange and membership programs that enable people to discover and boost their potential.",
  },
  {
    question:
      "Do I need to become a member of AIESEC to apply for an exchange?",
    answer:
      "No, you do not have to become a member of AIESEC to go on exchange.",
  },
  {
    question: "testtesttest",
    answer: "testtesttesttest",
  },
  {
    question: "testtesttest",
    answer: "testtesttesttest",
  },
  {
    question: "testtesttest",
    answer: "testtesttesttest",
  },
  {
    question: "testtesttest",
    answer: "testtesttesttest",
  },
  {
    question: "testtesttest",
    answer: "testtesttesttest",
  },
  {
    question: "testtesttest",
    answer: "testtesttesttest",
  },
];

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboutUs</title>
      </Head>
      <NavBar />
      <Container>
      <WiS />
        <Values />

        <div className="">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-black mb-4 text-center">
            Our History
          </h1>
          <div className="flex w-full justify-between  md:flex-row flex-col ">
            <HistoryCards program="MOR_1986" />
            <HistoryCards program="MOR_1996" />
            <HistoryCards program="MOR_2006" />
            <HistoryCards program="MOR_2016" />
          </div>
        </div>
        <Team />
        <div className="mt-5">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-black mb-4 text-center">
            Our Local Branches
          </h1>
          <Slider />
        </div>
        <div className="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t border-gray-200 pt-6">
            {faqs.map((faq) => (
              <FAQ
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
