import Style  from "./Navbar.module.css"

import logo from "../../assets/images/logo.svg"
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <nav className="bg-gray-100 text-center static lg:fixed top-0 right-0 left-0 py-2">
        <div className="container justify-between mx-auto py-2 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row">
            <NavLink>
                <img  src={logo} alt="fresh cart logo" />
            </NavLink>
            <ul className="flex flex-col lg:flex-row items-center">
                <li><NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to="">Home</NavLink></li>
                <li><NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to="cart">Cart</NavLink></li>
                <li><NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to="products">Products</NavLink></li>
                <li><NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to="brands">brands</NavLink></li>
                <li><NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to="categories">Categories</NavLink></li>
            </ul>
        </div>
        <div className="flex flex-col lg:flex-row">
            
            <ul className="flex flex-col lg:flex-row items-center">
                <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to="login">login</NavLink></li>
                <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to="register">Register</NavLink></li>
                <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' >Logout</NavLink></li>
                <li  className="flex items-center py-2">
                  <i className="fab mx-2 fa-facebook"></i>
                  <i className="fab mx-2 fa-twitter"></i>
                  <i className="fab mx-2 fa-instagram"></i>
                  <i className="fab mx-2 fa-youtube"></i>
                  <i className="fab mx-2 fa-tiktok"></i>
                </li>
            </ul>
        </div>

        </div>
    </nav>
     
    </>
  );
}
