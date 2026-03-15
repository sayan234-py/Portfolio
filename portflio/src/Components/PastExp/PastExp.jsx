import "../PastExp/PastExp.css";
import mongo_db from "../Assets/mongo.png";
import react_logo from "../Assets/react.png";
import node_logo from "../Assets/node.png";
import express_logo from "../Assets/express-js.png";

function PastExp() {
  return (
    <section className="past-exp">
      <div className="content">
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
        <img src={mongo_db} alt="MongoDB" />
        <img src={express_logo} alt="Express.js" />
        <img src={react_logo} alt="React.js" />
        <img src={node_logo} alt="Node.js" />
      </div>
    </section>
  );
}

export default PastExp;
