import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import AIESEC_BLUE from "../assets/logos/AIESEC_BLUE";

export const NavBar = ({}: NavBarProps) => {
  const router = useRouter();

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
                  <li>
                    <Link
                      className={clsx(
                        "text-gray-500 transition hover:text-primary",
                        router.pathname == "/" && "text-primary"
                      )}
                      href="/"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx(
                        "text-gray-500 transition hover:text-primary",
                        router.pathname == "/events" && "text-primary"
                      )}
                      href="/events"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx(
                        "text-gray-500 transition hover:text-primary",
                        router.pathname == "/contact-us" && "text-primary"
                      )}
                      href="/contact-us"
                    >
                      Contacts-us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx(
                        "text-gray-500 transition hover:text-primary",
                        router.pathname == "/morocco" && "text-primary"
                      )}
                      href="/morocco"
                    >
                      Morocco
                    </Link>
                  </li>{" "}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button
                    title="thla"
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
      </header>
    </>
  );
};

export interface NavBarProps {}
