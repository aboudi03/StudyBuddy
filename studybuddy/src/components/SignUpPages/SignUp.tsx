'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';
import './TutorSignUp'

export default function SignUp() {
  const [userType, setUserType] = useState<'student' | 'tutor' | null>(null);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleContinue = () => {
    if (userType === 'student') {
      navigate('/student-signup'); // Navigate to student signup page
    } else if (userType === 'tutor') {
      navigate('/tutor-signup'); // Navigate to tutor signup page
    }
  };

  return (
    <div className="signup-container">
      <header className="header">
        <button className="back-button">←</button>
        <h1 className="title">Join Study Buddy</h1>
      </header>

      <nav className="steps">
        <div className="step active">
          <span className="step-indicator">―</span>
          Account Type
        </div>
        <div className="step">
          <span className="step-indicator">○</span>
          Personal Info
        </div>
        <div className="step">
          <span className="step-indicator">○</span>
          Confirmation
        </div>
      </nav>

      <main className="main-content">
        <h2 className="section-title">I want to join as:</h2>

        <div className="options">
          <label className={`option-card ${userType === 'student' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === 'student'}
              onChange={(e) => setUserType(e.target.value as 'student')}
              className="radio-input"
            />
            <div className="option-content">
              <h3 className="option-title">Student</h3>
              <p className="option-description">Learn from expert tutors</p>
            </div>
          </label>

          <label className={`option-card ${userType === 'tutor' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="userType"
              value="tutor"
              checked={userType === 'tutor'}
              onChange={(e) => setUserType(e.target.value as 'tutor')}
              className="radio-input"
            />
            <div className="option-content">
              <h3 className="option-title">Tutor</h3>
              <p className="option-description">Share your expertise</p>
            </div>
          </label>
        </div>

        <button
          className="continue-button"
          disabled={!userType}
          onClick={handleContinue} // Trigger navigation on click
        >
          Continue
        </button>
      </main>
    </div>
  );
}
