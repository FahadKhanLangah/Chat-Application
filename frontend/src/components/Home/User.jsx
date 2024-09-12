import { Link } from "react-router-dom";

const User = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className="text-center text-white">No users found</p>;  // Handle empty state
  }

  return (
    <>
      {users.map((user, i) => (
        <div key={i} className="flex items-center justify-center">
          <div className="flex mb-1 overflow-hidden hover:bg-opacity-85 gap-12 h-20 w-[90%] px-2 sm:w-[50%] items-center sm:px-5 py-3 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
            <div className="online avatar h-12 w-12">
              <img className="w-[100%] h-[100%] rounded-full object-cover" src={user.avatar?.url} alt="Not available" />
            </div>
            <Link to={`/message/${user._id}`}>
              <div>
                <h1 className="font-bold text-xl">{user.name}</h1>
                <p className="overflow-hidden text-sm">Fahad kesy ho</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
