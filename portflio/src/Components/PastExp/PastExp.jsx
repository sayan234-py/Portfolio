import "../PastExp/PastExp.css";
// import mongo_db from "../Assets/mongo.png";
// import react_logo from "../Assets/react.png";
// import node_logo from "../Assets/node.png";
// import express_logo from "../Assets/express-js.png";

function PastExp() {
  return (
    <div className="past-exp">
      <div className="content">
        <div className="exp-meta">
          <span className="exp-badge">MERN Stack Internship</span>
          <span className="exp-duration">3 months · 2024</span>
        </div>

        <h4 className="company">
          Anovatech Institute Of Crystalline Technology Pvt. Ltd.
        </h4>

        <ul className="desc">
          <li>Hands-on internship in MERN stack development.</li>
          <li>Built responsive React components with efficient state handling.</li>
          <li>Developed RESTful APIs using Node.js and Express.js.</li>
          <li>Integrated MongoDB for CRUD operations and schema design.</li>
          <li>Worked with authentication, routing, and component architecture.</li>
          <li>Collaborated with mentors using Git and real-world workflows.</li>
        </ul>
      </div>

      <div className="tech">
        <img src="https://res.cloudinary.com/dp2h1zqb4/image/upload/v1780601194/mongodb_wsxpi8.svg" alt="MongoDB" />
        <img src="https://res.cloudinary.com/dp2h1zqb4/image/upload/v1780601124/express-js_ztuefl.png" alt="Express.js" />
        <img src="https://res.cloudinary.com/dp2h1zqb4/image/upload/v1780600787/rect_tdu1rb.svg" alt="React.js" />
        <img src="https://res.cloudinary.com/dp2h1zqb4/image/upload/v1780600952/nde_mmvihg.jpg" alt="Node.js" />
      </div>
    </div>
  );
}

export default PastExp;
