const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 flex flex-col items-center text-center">
      {/* Profile Image with hover scale */}
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 rounded-full mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
      />

      {/* Username with hover color */}
      <h2 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
        {user.login}
      </h2>

      {/* User details */}
      {user.location && <p className="text-gray-500 mb-2">{user.location}</p>}
      {user.bio && <p className="text-gray-600 mb-2">{user.bio}</p>}

      {/* Profile link button */}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserProfile;
