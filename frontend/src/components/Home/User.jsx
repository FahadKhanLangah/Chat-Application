import { useEffect } from "react";
import { getOtherUsers } from "../../Redux/Actions/userAction";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((v) => v.user);
  useEffect(() => {
    if (error) {
      toast(error)
    }
  }, [error])

  useEffect(() => {
    dispatch(getOtherUsers())
  }, [dispatch]);
  if (loading) {
    return <>
      <h1>Loading</h1>
    </>
  }
  return (<>
    {
      users && users.map((v, i) =>
        <div key={i} className="flex items-center justify-center">
          <div className="flex mb-1 overflow-hidden hover:bg-opacity-85 gap-12 h-20 w-[90%] px-2 sm:w-[50%] items-center sm:px-5 py-3 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
            <div className="online avatar h-12 w-12 ">
              <img className="w-[100%] h-[100%] rounded-full object-cover" src={v.avatar.url} alt="Not available" />
            </div>
            <Link to={`/message/${v._id}`}><div className="">
              <h1 className="font-bold text-xl">{v.name}</h1>
              <p className="overflow-hidden text-sm">Fahad kesy ho</p>
            </div>
            </Link>
          </div>
        </div>
      )}
  </>
  )
}

export default User