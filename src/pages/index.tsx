import { Container, NavBar, ProgramCard } from "@/components";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();

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
        <div className="flex h-[90vh] items-center justify-center flex-col-reverse md:flex-row text-gray-700 font-sans">
          <div className=" w-full grow-[2] mt-4 md:mt-0 md:pr-8">
            <h1 className="md:text-5xl text-3xl font-semibold">
              <span className="text-primary">Leadership</span> is for every
              young person
            </h1>
            <p className="text-lg mt-2 md:mt-4 font-medium md:pr-12">
              Take part in one of our programs abroad, in your city, or
              virtually. Start your leadership journey with AIESEC.
            </p>
            <button
              className="transition duration-500 font-semibold px-5 py-3 md:w-1/5 w-full mt-4 text-white bg-primary hover:bg-blue-500 rounded-lg text-center"
              onClick={() => navigate.push("/signup")}
            >
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
        <div className=" flex flex-col md:flex-row mt-6  items-center justify-center md:h-[60vh]">
          <div className="bg-slate-700 w-full">
            <Image
              width={870}
              height={500}
              alt="People"
              src={
                "https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
            />
          </div>
          <div className="w-full md:pl-8 mt-4 md:mt-0">
            <h1 className="md:text-4xl text-3xl font-semibold text-gray-700">
              About AIESEC
            </h1>
            <p className="text-lg mt-2 md:mt-4 font-medium text-gray-700">
              AIESEC is a global non-profit youth organization that develops
              leadership capabilities in young people through cross-cultural
              exchanges and volunteering. With a network of over 40,000 members,
              AIESEC operates in over 120 countries and aims to create a
              positive impact on society by empowering young people to become
              socially responsible and globally aware leaders.
            </p>
            <button
              className="transition duration-500 font-semibold text-base px-5 py-3 md:w-1/3 w-1/2 mt-4 text-white bg-primary hover:bg-blue-500 rounded-lg  text-center"
              onClick={() => navigate.push("/about")}
            >
              About us
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:h-[60vh] justify-center items-start mt-4 md:mt-0">
          <h1 className="text-gray-700 md:text-5xl text-3xl font-semibold">
            Our Programms
          </h1>
          <p className="text-lg mt-2 md:mt-4 font-medium text-gray-700">
            We aim to develop leadership qualities and capabilities in young
            people with these programs
          </p>
          <div className="flex w-full justify-between mt-4 md:flex-row flex-col h-[120vh] ">
            <ProgramCard program="GV" />
            <ProgramCard program="GTa" />
            <ProgramCard program="GTe" />
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
