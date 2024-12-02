import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Successfully logged out!");
            })
            .catch((err) => {
                toast.error("Failed to log out. Please try again.");
                // console.error(err);
            });
    };

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-[#60a5fa] font-bold" : "text-black"
                }
            >
                Home
            </NavLink>
               
            <NavLink
                to="/my-profile"
                className={({ isActive }) =>
                    isActive ? "text-[#60a5fa] font-bold" : "text-black"
                }
            >
                My Profile
            </NavLink>
        </>
    );

    return (
        <div className="py-5">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl md:text-2xl font-semibold font-teko">
                        <span className="text-blue-500 text-2xl md:text-3xl">E</span>CO
                        <span className="text-blue-500 text-2xl md:text-3xl">A</span>DVENTURE
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-lg font-medium">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-4 items-center navbar-end"> 
                    {user && user?.email ? (
                        <button
                            onClick={handleLogout}
                            className="btn bg-blue-400 border-none text-white rounded-lg"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/auth/login"
                            className="btn border-none bg-blue-400 text-white rounded-lg"
                        >
                            Login
                        </Link>
                    )}
                    <div>
                        {user && user?.email ? (
                            <div
                                className="tooltip tooltip-info"
                                data-tip={user?.displayName}
                            >
                                <img
                                    src={user?.photoURL}
                                    className="rounded-full w-10 h-10 border-2 border-blue-400"
                                    alt="User Avatar"
                                />
                            </div>
                        ) : (
                            <p className="rounded-full text-blue-400 border-2 border-blue-400 p-2">
                                <FaUser />
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
