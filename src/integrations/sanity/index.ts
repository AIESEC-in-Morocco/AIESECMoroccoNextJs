import { createClient } from "next-sanity";
import { UseNextSanityImageProps, useNextSanityImage } from "next-sanity-image";
import axios from "axios";
import qs from "qs";

const ENDPOINT = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

const sanityClient = axios.create({
  baseURL: ENDPOINT,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "brackets" });
  },
});

const clientImage = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: "2021-03-25",
});

const useSanityImage = (source: any): UseNextSanityImageProps | null => {
  return useNextSanityImage(clientImage, source);
};

export { clientImage, useSanityImage, sanityClient };
