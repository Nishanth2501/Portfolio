import './App.css'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin, Calendar, Award, Code, BookOpen, Briefcase } from 'lucide-react'
import AIChatbot from './components/AIChatbot'
import { profileData } from './data/profileData'
import { githubService } from './services/githubService'

function App() {
  const [githubProfile, setGithubProfile] = useState(null)
  const [repositories, setRepositories] = useState([])
  const [languages, setLanguages] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profile, repos, langs] = await Promise.all([
          githubService.getUserProfile(),
          githubService.getRepositories(),
          githubService.getAllLanguages()
        ])
        
        setGithubProfile(profile)
        setRepositories(repos)
        setLanguages(langs)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Nishanth Reddy</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Welcome to Nishanth Reddy's World! 🚀</h2>
            <p className="hero-subtitle">AI Engineer & Developer</p>
            <p className="hero-description">
              Building intelligent solutions that bridge the gap between artificial intelligence and real-world applications. 
              Explore my journey, projects, and expertise in the world of AI and modern development.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="#projects" className="btn btn-secondary">Explore My World</a>
            </div>
            <div className="hero-stats">
              {githubProfile && (
                <div className="stats">
                  <div className="stat">
                    <Github size={20} />
                    <span>{githubProfile.public_repos} Repositories</span>
                  </div>
                  <div className="stat">
                    <Code size={20} />
                    <span>{Object.keys(languages).length} Languages</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Nishanth's World</h2>
            <div className="about-content">
              <p>{profileData.personal.bio}</p>
              <div className="about-highlights">
                <div className="highlight">
                  <Briefcase size={24} />
                  <div>
                    <h4>Professional Focus</h4>
                    <p>AI-powered solutions and intelligent systems</p>
                  </div>
                </div>
                <div className="highlight">
                  <Code size={24} />
                  <div>
                    <h4>Technical Expertise</h4>
                    <p>Full-stack development with AI integration</p>
                  </div>
                </div>
                <div className="highlight">
                  <Award size={24} />
                  <div>
                    <h4>Mission</h4>
                    <p>Bridging AI innovation with real-world applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {loading ? (
                <div className="loading">Loading projects from GitHub...</div>
              ) : (
                repositories.slice(0, 6).map((repo) => (
                  <div key={repo.id} className="project-card">
                    <div className="project-header">
                      <h3>{repo.name}</h3>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    </div>
                    <p className="project-description">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="project-meta">
                      <span className="project-language">{repo.language || 'Mixed'}</span>
                      <span className="project-stars">⭐ {repo.stargazers_count}</span>
                      <span className="project-updated">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">Technical Arsenal</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Programming Languages</h3>
                <div className="skill-tags">
                  {profileData.skills.programming.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Frameworks & Libraries</h3>
                <div className="skill-tags">
                  {profileData.skills.frameworks.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>AI & Machine Learning</h3>
                <div className="skill-tags">
                  {profileData.skills.ai_ml.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Data Engineering</h3>
                <div className="skill-tags">
                  {profileData.skills.data_engineering.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Visualization & BI</h3>
                <div className="skill-tags">
                  {profileData.skills.visualization.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Cloud & Databases</h3>
                <div className="skill-tags">
                  {profileData.skills.cloud_databases.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <div className="skill-tags">
                  {profileData.skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="skill-tags">
                  {profileData.skills.soft_skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            {Object.keys(languages).length > 0 && (
              <div className="github-languages">
                <h3>GitHub Language Distribution</h3>
                <div className="language-bars">
                  {Object.entries(languages)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 8)
                    .map(([lang, count]) => (
                      <div key={lang} className="language-bar">
                        <span className="language-name">{lang}</span>
                        <div className="language-progress">
                          <div 
                            className="language-fill" 
                            style={{ 
                              width: `${(count / Math.max(...Object.values(languages))) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Educational Journey</h2>
            <div className="education-timeline">
              {profileData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon">
                    <BookOpen size={24} />
                  </div>
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-year">{edu.year}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <h2 className="section-title">Professional Certifications</h2>
            <div className="certifications-grid">
              {profileData.certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">
                    <Award size={32} />
                  </div>
                  <div className="cert-content">
                    <h3>{cert.name}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-year">{cert.year}</p>
                    <p className="cert-id">ID: {cert.credentialId}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Connect with Nishanth</h2>
            <div className="contact-content">
              <p>Ready to explore opportunities or discuss AI projects? Let's connect!</p>
              <div className="contact-grid">
                <div className="contact-info">
                  <div className="contact-item">
                    <Mail size={20} />
                    <span>{profileData.personal.email}</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={20} />
                    <span>{profileData.personal.location}</span>
                  </div>
                  <div className="contact-item">
                    <Github size={20} />
                    <a href={profileData.personal.github} target="_blank" rel="noopener noreferrer">
                      GitHub Profile
                    </a>
                  </div>
                  <div className="contact-item">
                    <Linkedin size={20} />
                    <a href={profileData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                <div className="contact-cta">
                  <h3>Let's Build Something Amazing Together!</h3>
                  <p>Whether you're looking for AI expertise, technical consultation, or collaboration on innovative projects, I'm here to help.</p>
                  <div className="contact-buttons">
                    <a href={`mailto:${profileData.personal.email}`} className="btn btn-primary">
                      <Mail size={16} />
                      Send Email
                    </a>
                    <a href={profileData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      <Linkedin size={16} />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Nishanth Reddy. All rights reserved.</p>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  )
}

export default App

