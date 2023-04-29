import React, { useContext, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../DaynamickLink/DaynamickLink';
const Logout = () => {
    const [open, setOpen] = useState(false)
    const [success, SetSuccess] = useState('')
    const [error, setError] = useState('')
    const { registerLogOut } = useContext(AuthContext)
    const hendelTheLogoutForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        SetSuccess('')
        setError('')
        registerLogOut()
            .then(() => {
                SetSuccess('success the log out pag')
            })
            .catch(error => {
                setError(error.message)
            })
        form.reset()
    }
    return (
        <div className="flex justify-center">
            <form onSubmit={hendelTheLogoutForm} className="w-1/2 mx-auto border rounded-md shadow-md py-5 px-5 mt-3">
                <h1 className='text-3xl my-3 font-medium text-center'> Please log out the form</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" name="email" id="email" className="border rounded-lg py-2 px-3 w-full" required />
                </div>
                <div className="mb-6 relative">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    {
                        open ?
                            <input type="text" name="password" id="password" className="border rounded-lg py-2 px-3 w-full" required />
                            :
                            <input type="password" name="password" id="password" className="border rounded-lg py-2 px-3 w-full" required />
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
                <input type="submit" value='Log Out ' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                <p className='my-3 text-2xl text-orange-800'>{error}</p>
                <p className='my-3 text-2xl text-orange-800'>{success}</p>
            </form>
        </div>
    );
};

export default Logout;