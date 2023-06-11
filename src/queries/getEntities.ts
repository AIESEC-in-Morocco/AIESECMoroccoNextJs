import { sanityClient } from "@/integrations/sanity";
import groq from "groq";

const query = groq`
*[_type=="entity"]{
    vision, city, image_link, movement_name
  }
`;

interface Entities {
  city: string;
  movement_name: string;
  vision: string;
  image_link: string;
}

export default sanityClient.get<{
  query: string;
  result: Entities[];
}>("/", { params: { query } });
