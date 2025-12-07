const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-8 my-20 rounded-lg max-w-sm mx-auto text-center shadow-lg">

      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-2xl font-bold mb-2">John Doe</h2>

      <p className="text-gray-700">
        A passionate developer who enjoys building modern and interactive interfaces.
      </p>

    </div>
  );
};

export default UserProfile;
