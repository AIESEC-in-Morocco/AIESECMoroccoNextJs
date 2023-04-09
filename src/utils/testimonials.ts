import { TestimonialsProps } from "@/components";
import getImageFromGoogleDrive from "./getImageFromGoogleDrive";

const TESTIMONIALS: TestimonialsProps[] = [
  {
    name: "Asmae",
    testimonial:
      "Going to India for a volenteering program with AIESEC was one of the biggest challenges for me, since it was my first time travelling alone to another country and I don't regret this choice at all.\nI can't deny that it was perfect but also challenging. I learned that you always need to take the risk  and to accept the consequences but also to take the initiative and not to be scared to do so, I learned how to be organized and to not procrastinate since i had a project to work on and to submit before dely. In term of fun,i had so much fun, i met new faces and i made new friends that i would never forget, but most important thing is that i made memories.",
    country: "India",
    picture_link: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1MvlhCuUmILH85aOhhS2PilrxSAyImlXH/view"
    ),
    origin_city: "Kenitra",
    program: "GV",
  },
  {
    name: "Chaimae",
    testimonial:
      "AIESEC helped me to achieve one my career goals which is having a professional experience abroad.\nI learned several things during this opportunity such as connecting with people from different cultures, collaborating with businessmen to invite them to the forum (world cooperation industries forum) I was working on with Bosphorus expo.\nIt was an honour to be part of this project and I’m thankful to AIESEC for giving me this wonderful opportunity",
    country: "Turkey",
    origin_city: "Kenitra",
    picture_link: getImageFromGoogleDrive(
      "https://drive.google.com/file/d/1MiG2NI4yyx_zN7Qa5bsAfUZ_LITpUi1s/view"
    ),
    program: "GTa",
  },
];

export default TESTIMONIALS;
