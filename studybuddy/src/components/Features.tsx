// src/components/Features.tsx
import React from "react";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Expert-Led Live Classes",
    description: "Our instructors are industry professionals.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Unlimited 1:1 Tutoring",
    description: "Book a session with an expert tutor anytime.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Real-World Projects",
    description: "Build a portfolio with hands-on projects.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Interactive Learning Platform",
    description: "Code, test, and collaborate with others.",
    image: "https://via.placeholder.com/100",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center">Why Study Buddy?</h2>
      <p className="text-center mt-2">
        Learn at your own pace with our flexible courses. Our curriculum is designed to help you build a strong foundation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-4 border rounded">
            <img src={feature.image} alt={feature.title} className="mx-auto mb-4" />
            <h3 className="font-bold">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
