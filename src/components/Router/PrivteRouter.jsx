import React, { useContext } from 'react';
import { AuthContext } from '../DaynamickLink/DaynamickLink';
import { Navigate, useLocation } from 'react-router-dom';

const PrivteRouter = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (loding) {
        return <h1 className='text-orange-800'>Process the pag ............</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivteRouter;