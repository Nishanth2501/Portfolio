import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Nishanth Reddy</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Hi, I'm Nishanth Reddy</h2>
            <p className="hero-subtitle">AI Engineer & Developer</p>
            <p className="hero-description">
              Building innovative solutions with artificial intelligence and modern web technologies.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p>
                I'm a passionate AI engineer and developer with expertise in building 
                intelligent systems and modern web applications. I love exploring the 
                intersection of artificial intelligence and user experience.
              </p>
              <p>
                My focus is on creating innovative solutions that solve real-world problems 
                using cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Coming Soon</h3>
                <p>Exciting projects are on the way. Check back soon!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>AI & Machine Learning</h3>
                <ul>
                  <li>Machine Learning</li>
                  <li>Deep Learning</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Development</h3>
                <ul>
                  <li>React</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-content">
              <p>I'm always open to discussing new opportunities and collaborations.</p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="btn btn-primary">Email Me</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Nishanth Reddy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

