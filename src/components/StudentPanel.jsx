import { useState } from "react";

function StudentPanel() {
  const [active, setActive] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  const skills = ["HTML", "CSS", "JS"];

  return (
    <div>
      <h3>Student Panel</h3>

      <p>Status: {active ? "Active" : "Inactive"}</p>
      <button onClick={() => setActive(!active)}>
        Toggle Status
      </button>

      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      {showSkills && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentPanel;
