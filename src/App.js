import "./App.css";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Matrix from "./components/Matrix.js";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Joutria</h1>
        <nav className="nav">
          <div className="top">Home</div>
          <div className="bot">Projects</div>
          <div className="right">
            <span>Contact me</span>
          </div>
          <div className="left">
            <span>Blogs</span>
          </div>
        </nav>
        <Projects />
        <Contact />
      </div>
      <Matrix/>
      <p className="matrix">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        dignissimos nulla alias, sit temporibus laudantium est explicabo odit,
        architecto inventore aliquid omnis saepe ab nemo provident, ipsum
        voluptas nostrum. Deserunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tenetur dignissimos nulla alias, sit temporibus
        laudantium est explicabo odit, architecto inventore aliquid omnis saepe
        ab nemo provident, ipsum voluptas nostrum. Deserunt. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Tenetur dignissimos nulla alias,
        sit temporibus laudantium est explicabo odit, architecto inventore
        aliquid omnis saepe ab nemo provident, ipsum voluptas nostrum. Deserunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        dignissimos nulla alias, sit temporibus laudantium est explicabo odit,
        architecto inventore aliquid omnis saepe ab nemo provident, ipsum
        voluptas nostrum. Deserunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tenetur dignissimos nulla alias, sit temporibus
        laudantium est explicabo odit, architecto inventore aliquid omnis saepe
        ab nemo provident, ipsum voluptas nostrum. Deserunt. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Tenetur dignissimos nulla alias,
        sit temporibus laudantium est explicabo odit, architecto inventore
        aliquid omnis saepe ab nemo provident, ipsum voluptas nostrum. Deserunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        dignissimos nulla alias, sit temporibus laudantium est explicabo odit,
        architecto inventore aliquid omnis saepe ab nemo provident, ipsum
        voluptas nostrum. Deserunt.
      </p>
    </div>
  );
}

export default App;
