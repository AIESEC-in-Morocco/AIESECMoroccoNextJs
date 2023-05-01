import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2021-03-25",
});

const useSanityImage = (source: any) => {
  return useNextSanityImage(client, source);
};

export { client, useSanityImage };
