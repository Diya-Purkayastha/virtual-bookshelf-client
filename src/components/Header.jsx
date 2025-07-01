import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from './Logo';


const Header = () => {
    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    // Apply theme on load & change
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
     const handleThemeToggle = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                Swal.fire({
                    title: "You logged out successfully",
                    icon: "success",
                    draggable: true
                });
            }).catch((error) => {
                // An error happened.
                toast(error.message);
            });
    }

    return (
        <div className='fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-primary' >
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/bookshelf">Bookshelf</NavLink></li>
                            {
                                user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            }

                        </ul>
                    </div>
                    <Logo></Logo>
                </div>
                <div className="navbar-center text-white  hidden lg:flex ">
                    <ul className="menu menu-horizontal flex gap-4 text-[16px] px-1">
                         <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/bookshelf">Bookshelf</NavLink></li>
                            <li><NavLink to="/aboutUs">About Us</NavLink></li>
                            <li><NavLink to="/contactUs">Contact</NavLink></li>
                            {
                                user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            }

                    </ul>
                </div>
                <div className="navbar-end items-center">
                    <div className="login-btn flex gap-5">
                         <button
                            onClick={handleThemeToggle}
                            className="btn btn-sm btn-circle bg-secondary text-white"
                        >
                            {theme === "light" ? <FaMoon /> : <FaSun />}
                        </button>

                        {user &&
                            <img
                                className='w-10 h-10 hidden md:block rounded-full object-cover cursor-pointer'
                                src={user.photoURL}
                                alt="user"
                                title={user.displayName}
                            />
                        }
                        {
                            user ? <button onClick={handleLogout} className='btn btn-secondary text-primary'>Log Out</button> : <Link to='/auth/login' className='btn btn-secondary md:px-10 text-primary'  >Login</Link>
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Header;