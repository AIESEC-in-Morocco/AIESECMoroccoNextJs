import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, NavBar } from "@/components";
import getImageFromGoogleDrive from "@/utils/getImageFromGoogleDrive";

const Product: NextPage = () => {
  // const programs = ["gv", "gta", "gte"];
  const router = useRouter();

  // useEffect(() => {
  //   if (!programs.includes(router.query?.program as string)) {
  //     router.replace("/404");
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <NavBar />
      <div className="w-full md:h-96 h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          src={getImageFromGoogleDrive(
            "https://drive.google.com/file/d/14kc5KCSSshvXwYAh3GFpopgxzPRjMy-v/view?usp=sharing"
          )}
          alt="product"
        />
      </div>
      <Container>
        <div className="w-full">Product</div>
      </Container>
    </>
  );
};

export default Product;
