const UserProfile = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-2xl font-semibold mb-2">John Doe</h2>

      <p className="text-gray-600">
        A passionate developer who enjoys building modern and interactive user interfaces.
      </p>
    </div>
  );
};

export default UserProfile;
