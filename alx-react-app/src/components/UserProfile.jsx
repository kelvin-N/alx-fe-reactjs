const UserProfile = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Age:</strong> {props.age}
      </p>
      <p>
        <strong>Bio:</strong> {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
