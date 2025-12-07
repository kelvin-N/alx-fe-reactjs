const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-8 my-20 rounded-lg max-w-sm mx-auto text-center shadow-lg">

      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-xl text-blue-800 font-bold my-4">
        John Doe
      </h2>

      <p className="text-gray-600 text-base">
        A passionate developer who enjoys building modern and interactive interfaces.
      </p>

    </div>
  );
};

export default UserProfile;
