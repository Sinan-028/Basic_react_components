function Status({ active }) {
  return (
    <div className="status-card">
      <p>Status: {active ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default Status;