import "./App.css";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Matrix from "./components/Matrix.js";
import { useState } from "react";

function App() {
  let rainCount = Math.floor(window.innerWidth / 32);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="App">
      <div className="content">
        <h1>Joutria</h1>
        <nav className="nav">
          <div className="top">Home</div>
          <div
            className="bot"
            onClick={() => {
              setProject(!project);
            }}
          >
            Projects
          </div>
          <div className="right"  onClick={() => {
              setContact(!contact);
            }}>
            <span>Contact me</span>
          </div>
          <div className="left">
            <span>Blogs</span>
          </div>
        </nav>
        {project && <Projects setProject={setProject} project={project}/>}
        {contact && <Contact setContact={setContact} contact={contact}/>}
      </div>
      <div className="matrixContainer">
        {new Array(rainCount).fill().map((_, index) => (
          <Matrix key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
