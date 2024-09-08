import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

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
])
function App() {

  return (
    <>
      <div className='p-4 h-screen flex justify-center items-center'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
