import groq from "groq";

export default groq`
*[_type=="testimonial"]{
    ep_name, testimonial, 
      program->{name},
      entity -> {city},
      image,
      country_visited
  }
`;
