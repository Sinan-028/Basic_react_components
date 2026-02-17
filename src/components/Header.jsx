function Header({ title, skillCount }) {
  return (
    <header>
      <h2>{title}</h2>
      <p>Total Skills: {skillCount}</p>
    </header>
  );
}

export default Header;