import GV from "@/assets/programs/GV.jpg";
import GTa from "@/assets/programs/GTa.jpg";
import GTe from "@/assets/programs/GTe.jpg";
import Member from "@/assets/programs/Member.jpg";

export const PRODUCTS_COLOR = {
  GV: {
    long_term: "Global Volunteer",
    color: "#f85a40",
    short_abrev: "Volunteer with AIESEC",
    description:
      "Develop your leadership through a volunteering project contributing to the Sustainable Development Goals.",
    image: GV.src,
    button: "Become a Volunteer",
  },
  GTa: {
    long_term: "Global Talent",
    short_abrev: "Intern with AIESEC",
    color: "#0cb9c1",
    description:
      "Develop your leadership while boosting your career prospects with an international internship in your field.",
    image: GTa.src,
    button: "Become an Intern",
  },
  GTe: {
    long_term: "Global Teacher",
    color: "#f48924",
    short_abrev: "Teach with AIESEC",
    description:
      "Develop your leadership while boosting your career prospects with an opportunity to work as a teacher abroad.",
    image: GTe.src,
    button: "Become a Teacher",
  },
  MXP: {
    long_term: "Membership Experience",
    short_abrev: "AIESEC Member",
    color: "#037EF3",
    description:
      "Membership experience program  is a program that provides  education for youth from 18 to 30 years old who have a desire for  personal development.",
    image: Member.src,
    button: "Become an AIESECer",
  },
};
