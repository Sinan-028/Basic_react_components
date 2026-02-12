import { useState } from "react";

function StudentPanel() {
  const [active, setActive] = useState(true);
  const [showSkills, setShowSkills] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  const [editIndex, setEditIndex] = useState(null);

  // Add Skill
  function addSkill() {
    if (newSkill.trim() === "") return;

    setSkills([...skills, newSkill]);
    setNewSkill("");
  }

  // Delete Skill
  function removeSkill(index) {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  }

  // Start Editing
  function startEdit(index) {
    setNewSkill(skills[index]);
    setEditIndex(index);
  }

  // Save Edited Skill
  function saveEdit() {
    if (newSkill.trim() === "") return;

    const updatedSkills = [...skills];
    updatedSkills[editIndex] = newSkill;

    setSkills(updatedSkills);
    setEditIndex(null);
    setNewSkill("");
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Student Panel</h3>

      <p>Status: {active ? "Active" : "Inactive"}</p>
      <button onClick={() => setActive(!active)}>
        Toggle Status
      </button>

      <br /><br />

      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      <br /><br />

      {/* Input Section */}
      {showSkills && (
        <>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter skill"
          />

          {editIndex === null ? (
            <button onClick={addSkill}>Add Skill</button>
          ) : (
            <button onClick={saveEdit}>Save</button>
          )}

          <ul style={{ marginTop: "15px" }}>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}{" "}
                <button onClick={() => startEdit(index)}>
                  Edit
                </button>{" "}
                <button onClick={() => removeSkill(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default StudentPanel;
