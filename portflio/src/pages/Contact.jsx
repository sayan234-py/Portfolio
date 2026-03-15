import "./css/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Feel free to reach out for collaborations, opportunities, or just to say
        hello 👋
      </p>

      <div className="contact-container">
        
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:sayanandiindia@email.com">sayanandiindia@email.com</a>
            </li>
            <li>
              <strong>Location:</strong> Durgapur, India
            </li>
          </ul>
        </div>

       
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
