import { sanityClient } from "@/integrations/sanity";
import groq from "groq";

const query = groq`
*[_type=="testimonial"]{
    ep_name, testimonial, 
      program->{name},
      entity -> {city},
      image,
      country_visited
  }
`;

interface Testimonial {
  ep_name: string;
  testimonial: string;
  country_visited: string;
  program: {
    name: "GV" | "GTa" | "GTe" | "MXP";
  };
  entity: {
    city: string;
  };
  image: {
    assets: {
      _ref: string;
      _type: string;
    };
  };
}

export default sanityClient.get<{
  query: string;
  result: Testimonial[];
}>("/", { params: { query } });
