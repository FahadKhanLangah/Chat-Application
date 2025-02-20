import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import { login } from '../../Redux/Actions/userAction';

const Login = () => {
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { success, error } = useSelector((v) => v.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast(error)
    }
    if (success) {
      toast("Login Successfully");
      navigate('/');
    }
  }, [error, success, navigate]);
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    dispatch(login(formData))
  }
  return (
    <div className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100">
      <ToastContainer />
      <div className="p-4 text-center text-2xl font-bold">
        Login Now
      </div>

      <div className="px-6 py-3 flex gap-3">
        <span className="py-2 w-[30%] label text-xl font-medium">UserName</span>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="fahadkhan" className="w-[70%] text-black px-4 py-2 rounded" type="text" name="" id="" />
      </div>
      <div className="px-6 py-3 flex gap-3">
        <span className="py-2 w-[30%] label text-xl font-medium">Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="fahadkhan@gmail.com" className="w-[70%] text-black px-4 py-2 rounded" type="text" name="" id="" />
      </div>
      <div className="px-6 py-3 flex gap-3">
        <span className="py-2 w-[30%] label text-xl font-medium">Password</span>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="fahad123" className="w-[70%] text-black px-4 py-2 rounded" type="text" name="" id="" />
      </div>
      <div className="px-6 flex py-3 justify-between">
        <p className="">Don`t Have an Acount ??<Link to={'/register'}><button className="link">Register Now</button></Link>  </p>
        <button onClick={handleSubmit} className="btn btn-warningl text-lg sm:text-2xl w-[40%]">Login Now</button>
      </div>

    </div>
  )
}

export default Login