import { Container, NavBar } from "@/components";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Develop your leadership with AIESEC</title>
        <meta
          property="og:title"
          content="Develop your leadership with AIESEC"
          key="title"
        />
      </Head>
      <NavBar />
      <Container>
        <div className="flex w-full h-[90vh] items-center justify-center flex-col-reverse md:flex-row">
          <div className=" w-full grow-[2]  mt-4 md:mt-0 md:pr-8">
            <h1 className="md:text-5xl text-3xl text-black font-semibold">
              Leadership is for every young person
            </h1>
            <p className="text-base mt-2 md:mt-4">
              Take part in one of our programs abroad, in your city, or
              virtually. Start your leadership journey with AIESEC.
            </p>
            <button className="px-5 py-3 md:w-1/5 w-1/4 mt-4 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm  text-center  dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">
              Sign up!
            </button>
          </div>
          <div className="bg-zinc-500  w-full grow-0 mt-4 md:mt-0">
            <Image
              width={870}
              height={500}
              alt="People"
              src={
                "https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
            />
          </div>
        </div>
        {/* <Image
          alt="AIESEC in the Morocco"
          src={getImageFromGoogleDrive(
            "https://drive.google.com/file/d/1aQUjNROuTchr07eMCFgtarGDLjpDEIkK/view"
          )}
          width={500}
          height={200}
        /> */}
      </Container>
    </>
  );
}
