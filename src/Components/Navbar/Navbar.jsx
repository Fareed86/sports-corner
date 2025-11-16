import React, { useContext } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { IoLogOutSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user, userSignOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        userSignOut()
        .then(()=> toast.success("Logout Successful"))
    }
    const links = <>
        <li className='text-[20px] hover:text-blue-400'><Link to='/'>Home</Link></li>
        <li className='text-[20px] hover:text-blue-400'><Link to='/jerseys'>Jerseys</Link></li>
        <li className='text-[20px] hover:text-blue-400'><Link to='/shoes'>Shoes</Link></li>
        <li className='text-[20px] hover:text-blue-400'><Link to='/sunglasses'>Sunglasses</Link></li>
        <li className='text-[20px] hover:text-blue-400'><Link to='/contact'>Contact Us</Link></li>
    </>
    return (
        <div>
            <div className="navbar p-5 bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'><img height={100} width={150} src="/logo.png" alt="Sports Corner Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link><FaCartShopping className='text-2xl mr-3' /></Link>
                    {user? <Link><IoLogOutSharp onClick={handleLogOut} className='text-2xl' /></Link> : <Link to='/register'><BsPeopleFill className='text-2xl mr-1' /></Link> }
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;