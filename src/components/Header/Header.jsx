import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../DaynamickLink/DaynamickLink';

const Header = () => {
    const{user, registerLogOut} = useContext(AuthContext);
    const hendelLogOut = ()=>{
        registerLogOut()
        .then(()=>{ })
        .catch(error => console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                {/* <Link to="/logout">Log Out</Link> */}
                {
                    user&& <span className='text-orange-600 ml-2'>Welcome to {user.email}<button className='bg-orange-600 text-white px-2 rounded-md shadow-md ml-2' onClick={hendelLogOut}>sing Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;