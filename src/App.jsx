import "./App.css";
import cme from "./assets/cme.png";
import github from "./assets/github.png";
import linkedIn from "./assets/linkedIn.png";

function App() {
  return (
    <div className="App">
      <h1>
        Tim <br /> Gottling <br /> Tegman
      </h1>
      <div className="card">
        <div className="icon-container">
          <button
            onClick={() => {
              window.open(
                "https://cmeducations.se/utbildningar/program/frontend-app-developer",
                "_blank"
              );
            }}
          >
            <img
              className="icons"
              src={cme}
              alt="Changemaker Educations Logo"
            />
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Namget92", "_blank");
            }}
          >
            <img className="icons" src={github} alt="Github Icon" />
          </button>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/tim-gottling-tegman-b31262227/",
                "_blank"
              );
            }}
          >
            <img className="icons" src={linkedIn} alt="Linkedin Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
