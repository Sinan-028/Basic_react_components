import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Status from "./components/Status";
import Footer from "./components/Footer";
import StudentPanel from "./components/StudentPanel";
import "./App.css";

function App() {
  const [active, setActive] = useState(true);
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header 
        title="Student Dashboard" 
        skillCount={skills.length} 
      />

      <Profile 
        name="Sinan"
        course="MERN Stack"
        year="3"
      />

      <Status active={active} />

      <StudentPanel 
        active={active}
        setActive={setActive}
        skills={skills}
        setSkills={setSkills}
      />

      <Footer />
    </div>
  );
}

export default App;