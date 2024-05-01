import { Link, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
function Navbar() {
  const {user,logOut} =useContext(AuthContext)
 const handleLogOut = ()=>{ 
    logOut() 
  }
  return (
    <div className="navbar w-full bg-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {
              user ? null : <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            }
            <li>
              <NavLink to="/signUp">Register</NavLink>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex gap-10">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500"
              : "text-black font-semibold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500"
              : "text-black font-semibold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500"
              : "text-black font-semibold"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500"
              : "text-black font-semibold"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500"
              : "text-black font-semibold"
          }
        >
          Contact
        </NavLink>
        {
          user? null: <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500"
              : "text-black font-semibold"
          }
        >
          Login
        </NavLink>
        }
        {
          user? null : <NavLink
          to="/signUp"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500"
              : "text-black font-semibold"
          }
        >
          Register
        </NavLink>
        }
      </div>
      <div className="navbar-end flex gap-2">
        {
          user? <h1 className="text-black">{user.email}</h1>  : null
        }
        {
          user?
          <button onClick={handleLogOut}  className="text-black font-semibold border-2 border-orange-600 px-3 py-2 rounded-lg">
          LogOut
        </button> : <Link to="/login">
        <button className="text-black font-semibold border-2 border-orange-600 px-3 py-2 rounded-lg">
          Login
        </button>
        </Link>
        }
        
      </div>
    </div>
  );
}

export default Navbar;
