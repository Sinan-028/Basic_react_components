function Profile({ name, course, year }) {
  return (
    <div className="profile-card">
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default Profile;