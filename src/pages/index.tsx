import { Container, NavBar } from "@/components";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Image
          alt="AIESEC in the Morocco"
          src={getImageFromGoogleDrive(
            "https://drive.google.com/file/d/1aQUjNROuTchr07eMCFgtarGDLjpDEIkK/view"
          )}
          width={500}
          height={200}
        />
      </Container>
    </>
  );
}
