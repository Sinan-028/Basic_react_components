import { useState } from "react";

function Status() {
  const [active, setActive] = useState(true);

  return (
    <div className="status-card">
      <p>Status: {active ? "Active" : "Inactive"}</p>
      <button onClick={() => setActive(!active)}>
        Toggle Status
      </button>
    </div>
  );
}

export default Status;
