const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-center text-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-lg font-semibold">{user.login}</h2>
      {user.location && <p className="text-sm text-gray-500">{user.location}</p>}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
