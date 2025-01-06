import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <img
          src="https://via.placeholder.com/800x400" // Replace with your image
          alt="Hero"
          className="rounded-lg shadow"
        />
        <h1 className="text-3xl font-bold mt-6">Master Tech Skills with Expert Tutors</h1>
      </div>
    </section>
  );
};

export default HeroSection;
