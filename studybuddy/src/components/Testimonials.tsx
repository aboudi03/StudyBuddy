// src/components/Testimonials.tsx
import React from "react";

type Testimonial = {
  text: string;
  name: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Study Buddy helped me master programming in weeks!",
    name: "Karim Karoun",
  },
  {
    text: "The tutors are amazing and super helpful.",
    name: "Ahmad Ahmadi",
  },
  {
    text: "I built my own projects and landed a job.",
    name: "Maryam Ahmed",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 border rounded">
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
            <p className="font-bold mt-2">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
