import { useEffect } from "react";
import Typed from "typed.js";
import "./css/Home.css";
// import bgImg from "../Components/Assets/bgs.png";
import PastExp from "../Components/PastExp/PastExp";
import Footer from "../Components/Footer/Footer";

function Home() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "MERN Stack Developer",
        "React Engineer",
        "Full-Stack Builder",
        "UI Craftsman",
        "Stock Analyst",
      ],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <main>
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── Hero ── */}
      <section className="firstSection">
        <div className="leftSection">
          <div className="hero-badge">
            <span className="dot" />
            Open to opportunities
          </div>

          <h1 className="greeting">
            Hi, I'm{" "}
            <span className="name-highlight">Sayan</span>
          </h1>

          <p className="role-line">I am a passionate</p>
          <span id="element"></span>

          <p className="hero-desc">
            BCA student & MERN Stack developer crafting clean, scalable web
            apps — from pixel-perfect UIs to robust REST APIs.
          </p>

          <div className="hero-actions">
            <a href="/resume.pdf" download className="btn-primary">
              ↓ Download Resume
            </a>
            <a href="/contact" className="btn-ghost">
              Let's Talk →
            </a>
          </div>
        </div>

        <div className="rightSection">
          <div className="image-frame">
            <div className="image-ring" />
            <div className="image-glow" />
            <img src="https://res.cloudinary.com/dp2h1zqb4/image/upload/v1780598775/image_whwebg.png" alt="Sayan profile" />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Experience ── */}
      <section className="secondSection">
        <div className="section-label">// experience</div>
        <h2>Past Experience</h2>
        <PastExp />
      </section>

      <hr className="divider" />

      <Footer />
    </main>
  );
}

export default Home;
