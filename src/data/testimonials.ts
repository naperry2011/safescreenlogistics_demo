export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The clinician arrived right on time and made the whole thing genuinely relaxing. I felt sharper within the hour.",
    name: "Alex J.",
    location: "Indianapolis, IN",
    context: "IV Hydration Therapy",
  },
  {
    quote:
      "Booking was effortless and the blood draw was the most comfortable I've ever had. No waiting room, no stress.",
    name: "Jamie L.",
    location: "Carmel, IN",
    context: "Mobile Blood Draw",
  },
  {
    quote:
      "The Revive membership keeps me consistent. Priority scheduling alone is worth it for how busy I am.",
    name: "Mark S.",
    location: "Fishers, IN",
    context: "Revive Membership",
  },
];
