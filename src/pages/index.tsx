import { Container, NavBar } from "@/components";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="flex w-full h-[90vh] items-center justify-center">
          <div className="bg-red-500 w-full grow-[2]">
            <h1 className="text-5xl text-black font-semibold">
              Leadership is for every young person
            </h1>
            <p className="text-base mt-4">
              Take part in one of our programs abroad, in your city, or
              virtually. Start your leadership journey with AIESEC.
            </p>
            <button className="px-5 py-3 w-1/5 mt-4 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm  text-center  dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">
              Sign up!
            </button>
          </div>
          <div className="bg-zinc-500  w-full grow-0">hey</div>
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
