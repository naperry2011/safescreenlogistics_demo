export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  context: string;
};

/** Real client quotes only. The home page hides the section while this is empty. */
export const testimonials: Testimonial[] = [];
