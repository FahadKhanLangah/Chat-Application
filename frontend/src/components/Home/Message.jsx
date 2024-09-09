import { IoSend } from "react-icons/io5"
import Chat from "./Chat"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getOtherUserDetail } from "../../Redux/Actions/userAction"
import { toast } from "react-toastify"
const Message = () => {
  const { id } = useParams();
  const { loading, error, user } = useSelector((v) => v.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((getOtherUserDetail(id)))
  }, [dispatch, id])
  useEffect(() => {
    if (error) {
      toast(error)
    }
  }, [error]);
  if (loading) {
    return <>
      <h1>Loading Please wait</h1>
    </>
  }
  return (
    <div className="w-[100%] h-full px-0 sm:w-[50%] sm:px-5 py-3 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="flex bg-gray-800 rounded-md px-2 py-3">
        <div className="sm:w-[50%] flex gap-10 ">
          <img className="w-20 h-20 rounded-full object-cover"
            src={user?.avatar?.url}
            alt="User Avatar Image" />
          <div className="pt-2">
            <h1 className="text-3xl font-bold">{user?.name}</h1>
            <p>online</p>
          </div>
        </div>
      </div>
      <div className="sm:mt-10 mt-2 h-[80%] max-h-[650px] sm:max-h-[320px] overflow-y-auto"> {/* Allow vertical scrolling */}
        <Chat></Chat>
      </div>
      <div className="flex p-2 gap-10 mt-10">
        <input type="text" placeholder="Type here" className="input input-bordered w-full text-black" />
        <button className="text-3xl hover:text-blue-500"><IoSend /></button>
      </div>
    </div>
  )
}

export default Message