import { useEffect } from "react";
import Typed from "typed.js";
import "./css/Home.css";
import bgImg from "../Components/Assets/bgs.png";
import PastExp from "../Components/PastExp/PastExp";
import Footer from "../Components/Footer/Footer";

function Home() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "Web Developer",
        "Web Designer",
        "Frontend Developer",
        "Video Editor",
        "Photographer",
        "Stock Analyst",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <main>
      
      <section className="firstSection">
        <div className="leftSection">
          Hi, my name is <span id="nme">Sayan</span>
          <div>I am a passionate</div>
          <span id="element"></span>
        </div>

        <div className="rightSection">
          <img src={bgImg} alt="Sayan profile" />
        </div>
      </section>

      
      <hr className="divider" />

      
      <section className="secondSection">
        <h2>Past Experience</h2>
        <PastExp />
      </section>

      
      <hr className="divider" />

      <Footer/>
    </main>
  );
}

export default Home;
