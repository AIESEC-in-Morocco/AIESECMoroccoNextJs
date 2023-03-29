import { Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";
import Image from "next/image";

const people = [
  {
    name: "Ikram Atif",
    role: "MCP",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1oVnPO129X6mp59sPheyNVotI-Z-oY22d/view?usp=sharing"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Marouane El Marsi",
    role: "MCVP MKT",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1jmIafnr4ggHbs6LLIQ6E02V9Q_uj2Ui6/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Mohammed Khalil Badaoui",
    role: "MCVP DM",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/16bZhslsp2hJ1D8vDI4N6raG1CRz8NYt8/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Mohammed Taha Idrissi",
    role: "MCVP iCX",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1sDucWezReowiUGWVCvQGGPP-P8oMxQ6a/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Oussama Karim",
    role: "MCVP IM",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1Fo6r3ZSzf6GMEsFIA2gs3nC3lkRH_ngn/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Rayane Ouhssine",
    role: "MCVP TM",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1-BGoAz83kdav3KEbr8J6zHr1c7Ev11XR/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Salma Maazouze",
    role: "MCVP oGX",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1KC4E3g8ET-yMn69sFit8h2IcuMmBJNgp/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Walid Taleb",
    role: "MCVP BD&EWA",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1zteGCOeY0oaEpgC8xbhav0I-ZgAtbZYi/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Yassine Lahboub",
    role: "MCVP F&L",
    imageUrl: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/17kPRpuIMSYoLA8fkm9mcZtm3jLxkofnh/view?usp=share_link"
    ),
    facebookUrl: "#",
    linkedInUrl: "#",
    instagramUrl: "#",
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            laboriosam, magni tempore at maxime labore quo. Minima quisquam unde
            dolorum rerum blanditiis esse asperiores tempora!
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={person.linkedInUrl}
                      className="text-base font-semibold leading-6 text-black-600"
                    >
                      <Icon as={FaLinkedin} />
                    </a>
                    <a
                      href={person.facebookUrl}
                      className="text-base font-semibold leading-6 text-black-600"
                    >
                      <Icon as={FaFacebook} />
                    </a>
                    <a
                      href={person.instagramUrl}
                      className="text-base font-semibold leading-6 text-black-600"
                    >
                      <Icon as={FaInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
