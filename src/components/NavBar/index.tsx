import { lato } from "@/pages/_app";
import { useDisclosure } from "@chakra-ui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import AIESEC_BLUE from "../assets/logos/AIESEC_BLUE";
import { NavBarDrawer } from "../NavBarDrawer";
import routing from "./routing";

export const NavBar = ({}: NavBarProps) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <AIESEC_BLUE />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {routing.map((route) => {
                    if (route.isButton) return <></>;
                    return (
                      <li key={route.name}>
                        <Link
                          className={clsx(
                            "text-gray-500 transition hover:text-primary text-base",
                            lato.variable,
                            "font-sans",
                            router.pathname == route.path && "text-primary",
                            route.isButton &&
                              "bg-primary text-white px-5 py-3 rounded-lg hover:text-white hover:bg-blue-800"
                          )}
                          href={route.path}
                        >
                          {route.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button
                    onClick={onOpen}
                    title="Navbar"
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBarDrawer isOpen={isOpen} onClose={onClose} router={router} />
      </header>
    </>
  );
};

export interface NavBarProps {}
