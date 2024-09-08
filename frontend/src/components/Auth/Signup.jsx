import { useState } from "react"
import {Link} from 'react-router-dom'


const Signup = () => {
  let [gender, setGender] = useState('');
  let [name, setName] = useState('');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [avatar, setAvatar] = useState('');
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setAvatar(reader.result)
      }
      reader.onerror = () => {
        console.log("Error file")
      }
    }
  }
  const handleSubmit = () => {
    console.log(gender, name, username, email, password)
  }
  return (
    <div className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100">
      <div className="p-4 text-center text-2xl font-bold">
        Sign up Now
      </div>
      <div className="px-6 py-4 flex gap-3">
        <span className="py-2 w-[30%] label text-xl font-medium">Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Fahad Khan" className="w-[70%] text-black px-4 py-2 rounded" type="text" name="" id="" />
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
      <div className="px-6 py-3 flex gap-3">
        <span className="py-2 w-[30%] label text-xl font-medium">Gender</span>
        <span className="flex w-[70%] gap-6">
          <h1 className="py-3 px-2">Male</h1>
          <input onChange={(e) => setGender(e.target.value)} checked={gender === "male"} className=" text-black rounded w-5" value="male" type="radio" name="gender" />
          <h1 className="py-3 px-2">Female</h1>
          <input onChange={(e) => setGender(e.target.value)} checked={gender === "female"} className=" text-black rounded w-5" value="female" type="radio" name="gender" />
        </span>
      </div>
      <div className="px-6 py-3 flex gap-3">
        <span className="py-2 w-[30%] label text-xl font-medium">Profile Pic</span>
        <input onChange={(e) => handleAvatar(e)} className="px-4 py-2 w-[40%] rounded" type="file" />
        <div className="w-[30%]">
          <img className="h-12 w-12 object-cover rounded-full" src={avatar} alt="Not available" />
        </div>
      </div>
      <div className="px-6 flex py-3 justify-between">
        <p className="py-3">Already Have an Acount ??<Link to={'/login'}><button className="link">Login</button></Link>  </p>
        <button onClick={handleSubmit} className="btn btn-warningl text-2xl w-[40%]">Sign In</button>
      </div>

    </div>
  )
}

export default Signup