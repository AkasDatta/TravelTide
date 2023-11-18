import { useState } from 'react';
import { FaBars,  FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavbarTop from './NavbarTop/NavbarTop';
import logo from '../../../assets/logo.png';
import { FaRegCircleUser, FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
        <NavbarTop></NavbarTop>
        <div className='bg-white shadow'>
      <nav className="p-3 md:flex md:items-center md:justify-between max-w-screen-2xl mx-auto lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaBars/> : <FaBars/>}
          </span>
        </div>

        <ul
          className={`md:flex md:items-center z-[+1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
            } transition-all ease-in duration-500`}
        >

          <li className="mx-2 my-3 md:my-0">
            <Link to="/" className="text-sm text-gray-600  hover:text-blue-600 duration-600">
              Home
            </Link>
          </li>
          <li className="mx-2 my-3 md:my-0">
            <Link to="/colleges" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
              Colleges
            </Link>
          </li>
          <li className="mx-2 my-3 md:my-0">
            <Link to="/admission" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
              Admission
            </Link>
          </li>
          {/* {user && ( */}
            <li className="mx-2 my-3 md:my-0">
              <Link to="/mycollege" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
                My College
              </Link>
            </li>
          {/* )} */}

          {/* <div className="form-control mx-2 sm:my-5">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md bg-white w-36 px-2 py-1" />
          </div> */}

            <div className="mx-2 my-3 md:my-0">
                <FaBasketShopping className='text-2xl text-gray-700'></FaBasketShopping>
            </div>
            <div className="mx-2 my-3 md:my-0">
                <FaSistrix className='text-2xl'></FaSistrix>
            </div>
            <li className="mx-2 my-3 md:my-0">
                <FaRegCircleUser className='text-4xl'></FaRegCircleUser>
            </li>

         
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
