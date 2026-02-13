import { useState } from "react";

function StudentPanel({ active, setActive, skills, setSkills }) {
  const [showSkills, setShowSkills] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function addSkill() {
    if (newSkill.trim() === "") return;

    setSkills([...skills, newSkill]);
    setNewSkill("");
  }

  function removeSkill(index) {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  }

  function startEdit(index) {
    setNewSkill(skills[index]);
    setEditIndex(index);
  }

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

      <button
        type="button"
        onClick={() => setActive(!active)}
      >
        Toggle Status
      </button>

      <br /><br />

      <button
        type="button"
        onClick={() => setShowSkills(!showSkills)}
      >
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      <br /><br />

      {showSkills && (
        <>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter skill"
          />

          {editIndex === null ? (
            <button type="button" onClick={addSkill}>
              Add Skill
            </button>
          ) : (
            <button type="button" onClick={saveEdit}>
              Save
            </button>
          )}

          <ul style={{ marginTop: "15px" }}>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}{" "}
                <button
                  type="button"
                  onClick={() => startEdit(index)}
                >
                  Edit
                </button>{" "}
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                >
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