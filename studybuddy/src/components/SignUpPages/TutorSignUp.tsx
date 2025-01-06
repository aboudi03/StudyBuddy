'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import '../../styles/tutor-signup.css'

export default function TutorSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    educationLevel: '',
    certifications: null as File | null,
    experience: '',
    subjects: {
      cybersecurity: false,
      ai: false,
      dataAnalyst: false,
      softwareEngineering: false,
    },
    otherSubjects: '',
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    startTime: '',
    endTime: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    if (name.startsWith('subjects.')) {
      const subject = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        subjects: {
          ...prev.subjects,
          [subject]: checked
        }
      }))
    } else if (name.startsWith('availability.')) {
      const day = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        availability: {
          ...prev.availability,
          [day]: checked
        }
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      certifications: file
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="tutor-signup">
      <header className="header">
        <button className="back-button">←</button>
        <h1 className="title">Join Study Buddy</h1>
      </header>

      <nav className="steps">
        <div className="step">
          <span className="step-indicator">○</span>
          Account Type
        </div>
        <div className="step active">
          <span className="step-indicator">―</span>
          Personal Info
        </div>
        <div className="step">
          <span className="step-indicator">○</span>
          Confirmation
        </div>
      </nav>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <section className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title">Personal Information</h2>
          <div className="input-grid">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="form-section">
          <h2 className="section-title">Qualifications</h2>
          <div className="input-stack">
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleInputChange}
              required
            >
              <option value="">Highest Education Level</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">Ph.D.</option>
              <option value="other">Other</option>
            </select>

            <div className="file-upload">
              <input
                type="file"
                id="certifications"
                name="certifications"
                onChange={handleFileChange}
                className="file-input"
              />
              <label htmlFor="certifications" className="file-label">
                <Upload className="upload-icon" />
                <span>Upload a file (drag and drop)</span>
                <span className="file-hint">PNG, JPG or PDF up to 10MB</span>
              </label>
            </div>

            <input
              type="number"
              name="experience"
              placeholder="Years of Teaching Experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
            />
          </div>
        </section>

        {/* Subjects */}
        <section className="form-section">
          <h2 className="section-title">Subjects You Can Teach</h2>
          <p className="section-subtitle">Select Subjects</p>
          <div className="checkbox-grid">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="subjects.cybersecurity"
                checked={formData.subjects.cybersecurity}
                onChange={handleCheckboxChange}
              />
              Cybersecurity
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="subjects.ai"
                checked={formData.subjects.ai}
                onChange={handleCheckboxChange}
              />
              AI
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="subjects.dataAnalyst"
                checked={formData.subjects.dataAnalyst}
                onChange={handleCheckboxChange}
              />
              Data analyst
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="subjects.softwareEngineering"
                checked={formData.subjects.softwareEngineering}
                onChange={handleCheckboxChange}
              />
              Software engineering
            </label>
          </div>
          <input
            type="text"
            name="otherSubjects"
            placeholder="Other Subjects"
            value={formData.otherSubjects}
            onChange={handleInputChange}
          />
        </section>

        {/* Availability */}
        <section className="form-section">
          <h2 className="section-title">Availability</h2>
          <p className="section-subtitle">Select Available Days</p>
          <div className="checkbox-grid">
            {Object.entries(formData.availability).map(([day, checked]) => (
              <label key={day} className="checkbox-label">
                <input
                  type="checkbox"
                  name={`availability.${day}`}
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
            ))}
          </div>
          <div className="time-inputs">
            <div className="input-group">
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        <div className="form-buttons">
          <button type="button" className="back-button">
            Back
          </button>
          <button type="submit" className="submit-button">
            Register as Tutor
          </button>
        </div>
      </form>
    </div>
  )
}

