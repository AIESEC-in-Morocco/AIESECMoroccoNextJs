import { lato } from "@/pages/_app";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import clsx from "clsx";
import Link from "next/link";
import { NextRouter } from "next/router";
import routing from "../NavBar/routing";

export const NavBarDrawer = ({
  isOpen,
  onClose,
  router,
}: NavBarDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />

        <DrawerBody className="h-full w-full flex flex-col justify-center items-center">
          {routing.map((route) => {
            return (
              <div key={route.path} className="p-4">
                <Link
                  className={clsx(
                    "text-gray-500 transition hover:text-primary text-base",
                    lato.variable,
                    "font-sans",
                    router.pathname == route.path && "text-primary"
                  )}
                  href={route.path}
                >
                  {route.name}
                </Link>
              </div>
            );
          })}
        </DrawerBody>
        <DrawerFooter w="100%">
          <button className="font-body font-bold px-5 py-3 w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm  text-center  dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">
            <Link href="/signup">SIGNUP</Link>
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export interface NavBarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  router: NextRouter;
}
