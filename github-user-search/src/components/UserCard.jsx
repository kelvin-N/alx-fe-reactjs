const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <a href={user.html_url} target="_blank">View Profile</a>
    </div>
  );
};

export default UserCard;
