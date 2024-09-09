import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Message from './components/Home/Message';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Signup />
  },
  {
    path: '/message/:id',
    element: <Message />
  },
])
function App() {

  return (
    <>
      <div className='p-2 h-screen flex justify-center items-center'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
