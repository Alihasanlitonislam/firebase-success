import React, { useContext, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../DaynamickLink/DaynamickLink';
const Login = () => {
  const [open, setOpen] = useState(false)
  const [success, SetSuccess] = useState('')
  const [error, setError] = useState('')
  const { registerLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  // login form hendel section
  const hendelTheLoginForm = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    SetSuccess('');
    registerLogin(email, password)
      .then(result => {
        const user = result.user
        SetSuccess('Success the Login Form')
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message)
      })
    form.reset()
  }
  return (
    <div className="flex justify-center">
      <form onSubmit={hendelTheLoginForm} className="w-1/2 mx-auto border rounded-md shadow-md py-5 px-5 mt-3">
        <h1 className='text-3xl my-3 font-medium text-center'> Please login the form</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" name="email" id="email" className="border rounded-lg py-2 px-3 w-full" required />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          {
            open ?
              <input type="text" name="password" id="password" className="border rounded-lg py-2 px-3 w-full" required />
              : <input type="password" name="password" id="password" className="border rounded-lg py-2 px-3 w-full" required />
          }
          <span onClick={() => setOpen(!open)}>
            {
              open ?
                <EyeIcon className="h-6 w-6 text-blue-500 absolute top-10 right-5 " />
                :
                <EyeSlashIcon className="h-6 w-6 text-orange-500 absolute top-10 right-5" />
            }
          </span>
        </div>
        <input type="submit" value='Login ' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        <dir>
          <span>New to ema-jon?... <Link to="/register" className='hover:text-orange-500 hover:border-b-2 border-orange-500'>Pleace Register</Link></span>
        </dir>
        <p className='text-orange-600 text-2xl font-medium'>{error}</p>
        <p className='text-orange-600 text-2xl font-medium'>{success}</p>
      </form>
    </div>
  );
};

export default Login;