import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h2 className="footer-heading">About Study Buddy</h2>
            <p className="footer-text">
              Study Buddy connects students with expert tutors to achieve academic success and reach their learning goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h2 className="footer-heading">Quick Links</h2>
            <nav className="footer-nav">
              <a href="/" className="footer-link">
                Home
              </a>
              <a href="/courses" className="footer-link">
                Courses
              </a>
              <a href="/tutors" className="footer-link">
                Tutors
              </a>
              <a href="/faq" className="footer-link">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h2 className="footer-heading">Contact Us</h2>
            <div className="footer-contact">
              <p className="footer-contact-item">
                <span className="footer-icon">✉</span>
                support@studybuddy.com
              </p>
              <p className="footer-contact-item">
                <span className="footer-icon">📞</span>
                +961 81 419 450
              </p>
              <p className="footer-contact-item">
                <span className="footer-icon">📍</span>
                Tripoli
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

