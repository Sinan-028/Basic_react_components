function Header({ title, skillCount }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Total Skills: {skillCount}</p>
    </div>
  );
}

export default Header;