import { useState } from "react";

function StudentPanel({ active, setActive, skills, setSkills }) {
  const [showSkills, setShowSkills] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function addSkill() {
    if (newSkill.trim() === "") {
      setError("Skill cannot be empty");
      return;
    }

    setSkills([...skills, newSkill]);
    setNewSkill("");
    setError("");
    setMessage("Skill added successfully ✅");

    setTimeout(() => setMessage(""), 2000);
  }

  function removeSkill(index) {
    const confirmDelete = window.confirm("Delete this skill?");
    if (!confirmDelete) return;

    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    setMessage("Skill deleted");
    setTimeout(() => setMessage(""), 2000);
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
    setMessage("Skill updated ✅");
    setTimeout(() => setMessage(""), 2000);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Student Panel</h3>

      <p>Status: {active ? "Active" : "Inactive"}</p>

      <button type="button" onClick={() => setActive(!active)}>
        Change Status
      </button>

      <br /><br />

      <button type="button" onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "View Skills"}
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

          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}

          {editIndex === null ? (
            <button
              type="button"
              onClick={addSkill}
              disabled={newSkill.trim() === ""}
            >
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
                <button type="button" onClick={() => startEdit(index)}>
                  Edit
                </button>{" "}
                <button type="button" onClick={() => removeSkill(index)}>
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