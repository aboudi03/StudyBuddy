// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold">About Study Buddy</h3>
          <p>Connecting students with expert tutors to achieve academic success.</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-blue-400">Home</a></li>
            <li><a href="#" className="text-blue-400">Courses</a></li>
            <li><a href="#" className="text-blue-400">Tutors</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <p>Email: support@studybuddy.com</p>
          <p>Phone: +1 410 450</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
