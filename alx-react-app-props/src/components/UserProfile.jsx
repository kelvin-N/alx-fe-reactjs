import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="p-4 border rounded-lg max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-2">User Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button
        onClick={() =>
          setUser({ ...user, name: "Updated User" })
        }
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Update Name
      </button>
    </div>
  );
};

export default UserProfile;
