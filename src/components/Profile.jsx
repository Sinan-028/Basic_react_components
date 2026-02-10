function Profile(props) {
  return (
    <div className="profile-card">
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default Profile;
