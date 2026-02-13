function Status({ active }) {
  return (
    <div>
      <p>Status: {active ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default Status;