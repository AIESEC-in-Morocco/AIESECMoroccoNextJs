import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Product: NextPage = () => {
  const programs = ["GV", "GTa", "GTe"];

  const router = useRouter();
  // if (!programs.includes(router.query?.program as string)) {
  //   router.push("/404");
  //   return null;
  // }

  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <div>{router.query?.program}</div>
    </>
  );
};

export default Product;
