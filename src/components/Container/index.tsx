import { lato } from "@/pages/_app";
import clsx from "clsx";

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",
        lato.variable,
        "font-sans"
      )}
    >
      {children}
    </div>
  );
};

export interface ContainerProps {
  children: React.ReactNode;
}
