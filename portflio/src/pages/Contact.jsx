import "./css/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-orb" />

      <div className="contact-header">
        <div className="page-label">// contact</div>
        <h2>Let's Work Together</h2>
        <p className="contact-intro">
          Open to internships, collaborations, or just a good tech conversation.
          Feel free to drop a message — I usually reply within a day 👋
        </p>
      </div>

      <div className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to new opportunities and interesting projects.
            Reach out and let's build something great.
          </p>

          <div className="info-item">
            <span className="info-icon">📧</span>
            <div>
              <span className="info-label">Email</span>
              <div className="info-value">
                <a href="mailto:nsayan520@gmail.com">nsayan520@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <span className="info-label">Location</span>
              <div className="info-value">Durgapur, West Bengal, India</div>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🎓</span>
            <div>
              <span className="info-label">Status</span>
              <div className="info-value">#OpenToWork · BCA 2023–2027</div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/sayan-nandi-152581359"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              ↗ LinkedIn
            </a>
            <a
              href="https://github.com/sayan234-py"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">subject</label>
            <input id="subject" type="text" placeholder="What's this about?" />
          </div>
          <div className="form-group">
            <label htmlFor="message">message</label>
            <textarea id="message" rows="5" placeholder="Your message..." />
          </div>
          <button type="button" className="submit-btn">
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
