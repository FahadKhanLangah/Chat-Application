import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import User from "./user";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/Actions/userAction";
import { toast, ToastContainer } from "react-toastify";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  const { error } = useSelector((v) => v.user);
  useEffect(() => {
    if (error) {
      toast(error)
    }
  }, [error])

  const handleSearch = () => {

  }
  const handleLogout = () => {
    dispatch(logoutUser());
  }
  return (
    <>
      <div className="h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <ToastContainer />
        <div className="flex justify-center items-center">
          <div className="flex sm:w-[50%] p-4 justify-center gap-10">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search here" className="sm:w-[80%] text-black rounded-md px-4 py-2" type="text" />
            <span onClick={handleSearch} className="sm:w-[20%] p-2 text-2xl cursor-pointer hover:text-green-600"><FaSearch /></span>
          </div>
        </div>
        <div className="h-[85%] sm:h-[85%] overflow-auto">
          <User />
        </div>
        <div className="sm:-mt-12">
          <button title="Logout" onClick={handleLogout} className="btn btn-circle text-2xl text-white bg-transparent hover:bg-fuchsia-800 sm:mt-0 mt-2 ml-2">
            <IoLogOut />
          </button>
          <button title="My Profile" className="btn btn-circle text-2xl text-white bg-transparent hover:bg-fuchsia-800 sm:mt-0 mt-2 ml-2">
            <CgProfile />
          </button>
          <Link to={'/login'}><button title="Login" className="btn btn-circle text-2xl text-white bg-transparent hover:bg-fuchsia-800 sm:mt-0 mt-2 ml-2">
            <LuLogIn />
          </button>
          </Link>



        </div>
      </div>
    </>
  )
}

export default Home