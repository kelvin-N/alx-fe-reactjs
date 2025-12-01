<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {users.map((user) => (
    <div
      key={user.id}
      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center
                 hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      {/* Avatar with hover scale */}
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
      />

      {/* Username with hover color */}
      <h2 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-500">
        {user.login}
      </h2>

      {/* Optional location display */}
      {user.location && <p className="text-sm text-gray-500">{user.location}</p>}

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
  ))}
</div>

