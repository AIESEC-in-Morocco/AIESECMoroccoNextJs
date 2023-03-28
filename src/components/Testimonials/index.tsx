export const Testimonials = ({ name }: TestimonialsProps) => {
  return (
    <div className="flex h-[60vh] pr-8">
      <div className="w-full h-full bg-red-600">{name}</div>
      <div className="w-full h-full bg-blue-600">{name}</div>
    </div>
  );
};

export interface TestimonialsProps {
  name: string;
  // testimonial: string;
  // country: string;
  // picture_link: string;
}
