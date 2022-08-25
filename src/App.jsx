import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Tim <br /> Gottling <br /> Tegman
      </h1>
      <div className="card">
        <p>
          My name is Tim Gottling Tegman and I am currently studying to become a
          frontend developer at Changemaker Educations in stockholm and I will
          finish my education next summer. Right now I'm looking for an LIA
          place (internship), so feel free to contact me via Linkedin if you're
          interested.
        </p>
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
              src="/src/assets/cme.png"
              alt="Changemaker Educations Logo"
            />
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Namget92", "_blank");
            }}
          >
            <img
              className="icons"
              src="/src/assets/github.png"
              alt="Github Icon"
            />
          </button>
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/tim-gottling-tegman-b31262227/",
                "_blank"
              );
            }}
          >
            <img
              className="icons"
              src="/src/assets/linkedIn.png"
              alt="Linkedin Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
