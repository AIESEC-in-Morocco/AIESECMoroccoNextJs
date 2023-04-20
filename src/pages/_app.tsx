import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
