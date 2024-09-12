import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOtherUserDetail } from "../../Redux/Actions/userAction";
import { toast, ToastContainer } from "react-toastify";
import { getMessages, sentMessage } from "../../Redux/Actions/messageAction";

const Message = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const { loading, error, user } = useSelector((v) => v.user);
  const { messages } = useSelector((v) => v.messages);
  const [localMessages, setLocalMessages] = useState([]);
  console.log(messages)

  // Fetch messages and user details on component mount
  useEffect(() => {
    dispatch(getMessages(id));
    dispatch(getOtherUserDetail(id));
  }, [dispatch, id]);

  // Update local messages when Redux messages update
  useEffect(() => {
    if (messages) {
      setLocalMessages(messages);
    }
  }, [messages]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // Handle sending a message
  const handleSubmit = () => {
    if (message.trim()) {
      const formData = { message };
      dispatch(sentMessage(id, formData))
      setMessage('');
    }
  };

  const filteredMessages = localMessages?.filter(m => typeof m === 'object' && m.message);
  if (loading && !messages.length) {
    return <h1>Loading Please wait...</h1>;
  }

  return (
    <div className="w-[100%] h-full px-0 sm:w-[50%] sm:px-5 py-3 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="flex bg-gray-800 rounded-md px-2 py-3">
        <ToastContainer />
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
        <div>
          {filteredMessages && filteredMessages.map((v, i) => (
            <div className={`chat ${id === v.reciever ? 'chat-end' : 'chat-start'}`} key={v._id || i}>
              <div className="chat-bubble">
                {v.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex p-2 gap-10 mt-10">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full text-black"
        />
        <button onClick={handleSubmit} className="text-3xl hover:text-blue-500">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Message;
