const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-8 my-20 rounded-lg max-w-xs md:max-w-sm mx-auto text-center shadow-lg sm:p-4 md:p-8 hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-2xl">

      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-36 h-36 rounded-full mx-auto mb-4 object-cover sm:w-24 sm:h-24 md:w-36 md:h-36"
      />

      <h2 className="text-xl text-blue-800 font-bold my-4 sm:text-lg md:text-xl hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out">
        John Doe
      </h2>

      <p className="text-gray-600 text-base sm:text-sm md:text-base hover:scale-105 hover:text-blue-500 transition-transform duration-300 ease-in-out">
        A passionate developer who enjoys building modern and interactive interfaces.
      </p>

    </div>
  );
};

export default UserProfile;
