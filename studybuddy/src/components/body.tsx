import '../styles/body.css'

export default function Body() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Master Tech Skills with Expert Tutors</h1>
        </div>
      </section>

      {/* Why Study Buddy Section */}
      <section className="why-section">
        <h2 className="section-title">Why Study Buddy?</h2>
        <p className="section-description">
          Learn at your own pace with our flexible courses. Our curriculum is designed to help you build 
          a strong foundation in tech. Whether you're a beginner or an experienced coder, we have 
          something for you.
        </p>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <img src="/images/expert-classes.svg" alt="Expert-Led Live Classes" className="feature-image" />
            <h3 className="feature-title">Expert-Led Live Classes</h3>
            <p className="feature-description">
              Learn directly from industry professionals who work at leading tech companies. They're experts in 
              the skills you need to learn.
            </p>
          </div>

          <div className="feature-card">
            <img src="/images/tutoring.svg" alt="Unlimited 1:1 Tutoring" className="feature-image" />
            <h3 className="feature-title">Unlimited 1:1 Tutoring</h3>
            <p className="feature-description">
              Work together with your tutor to master concepts, solve through problems, or get questions about the course 
              answered.
            </p>
          </div>

          <div className="feature-card">
            <img src="/images/projects.svg" alt="Real-World Projects" className="feature-image" />
            <h3 className="feature-title">Real-World Projects</h3>
            <p className="feature-description">
              Build a professional portfolio with real-world experience and practice with the latest technologies used in 
              the industry.
            </p>
          </div>

          <div className="feature-card">
            <img src="/images/platform.svg" alt="Interactive Learning Platform" className="feature-image" />
            <h3 className="feature-title">Interactive Learning Platform</h3>
            <p className="feature-description">
              Our platform makes learning seamless with interactive exercises, quizzes, discussions, and collaboration with 
              peers to create the perfect learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src="/placeholder.svg?height=50&width=50" alt="Student" className="testimonial-image" />
              <p className="testimonial-text">
                "I'm so glad I found Study Buddy! The tutors are really helpful, and the platform is amazing. I'm discovering new concepts and making more and more progress in just a few weeks."
              </p>
              <p className="testimonial-author">Karin Kousan</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src="/placeholder.svg?height=50&width=50" alt="Student" className="testimonial-image" />
              <p className="testimonial-text">
                "Study Buddy is something I love that I can get help whenever I need it. The tutors are friendly and knowledgeable, and the platform is easy to use. I've learned a lot and improved a lot in my coding skills."
              </p>
              <p className="testimonial-author">Ahmad Almohsen</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src="/placeholder.svg?height=50&width=50" alt="Student" className="testimonial-image" />
              <p className="testimonial-text">
                "Study Buddy has been a game changer for me. The 1:1 tutoring is amazing, and the projects are a fun way to apply what I've learned. I've been able to learn at my own pace with all the support I need to succeed."
              </p>
              <p className="testimonial-author">Richard Alexander</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src="/placeholder.svg?height=50&width=50" alt="Student" className="testimonial-image" />
              <p className="testimonial-text">
                "I highly recommend Study Buddy to anyone looking to learn how to code. The curriculum is well-structured, the platform is user-friendly, and the community is supportive. I've had a great experience so far!"
              </p>
              <p className="testimonial-author">Sarah Chen</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

