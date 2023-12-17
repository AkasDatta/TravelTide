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
      <nav className="p-4 md:flex md:items-center md:justify-between max-w-screen-2xl mx-auto xl:px-4 lg:px-2 overflow-x-hidden">
        <div className="flex justify-between items-center">
          <Link to="/" className='my-4 w-64 lg:w-56 md:w-32'>
            <img src={logo} alt="" />
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaBars/> : <FaBars/>}
          </span>
        </div>
            <div className={`md:flex md:items-center z-[+1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500`}>
                <ul className='md:flex xl:mx-32 lg:mx-10 md:mx-8'>
                    <li className="xl:mx-7 lg:mx-3 md:mx-1 my-3 md:my-0">
                        <Link to="/" className="lg:text-lg md:text-md text-black hover:text-teal-500 font-bold duration-600 nav-link">
                        Home
                        </Link>
                    </li>
                    <li className="xl:mx-7 lg:mx-3 md:mx-1 my-3 md:my-0">
                        <Link to="/colleges" className="lg:text-lg md:text-md text-black hover:text-teal-500 font-bold duration-600">
                        Pages
                        </Link>
                    </li>
                    <li className="xl:mx-7 lg:mx-3 md:mx-1 my-3 md:my-0">
                        <Link to="/admission" className="lg:text-lg md:text-md text-black hover:text-teal-500 font-bold duration-600">
                        About
                        </Link>
                    </li>
                    <li className="xl:mx-7 lg:mx-3 md:mx-1 my-3 md:my-0">
                        <Link to="/mycollege" className="lg:text-lg md:text-md text-black hover:text-teal-500 font-bold duration-600">
                            Tours
                        </Link>
                    </li>
                    <li className="xl:mx-7 lg:mx-3 md:mx-1 my-3 md:my-0">
                        <Link to="/mycollege" className="lg:text-lg md:text-md text-black hover:text-teal-500 font-bold duration-600">
                            Blogs
                        </Link>
                    </li>
                    <li className="xl:mx-7 lg:mx-3 md:mx-1 my-3 md:my-0">
                        <Link to="/mycollege" className="lg:text-lg md:text-md text-black hover:text-teal-500 font-bold duration-600">
                            Shop
                        </Link>
                    </li>
                    <li className="xl:mx-7 lg:mx-3 md:mx-1 my-3 md:my-0">
                        <Link to="/mycollege" className="lg:text-lg md:text-md text-black hover:text-teal-500 font-bold duration-600">
                        Destributions
                        </Link>
                    </li>
                </ul>
                <div className='flex mt-3'>
                    <div className="xl:mx-4 lg:mx-2 md:mx-1 ">
                            <FaBasketShopping className='text-2xl text-gray-700'></FaBasketShopping>
                        </div>
                        <div className="lg:mx-3 md:mx-4 md:my-0 mx-4">
                            <FaSistrix className='text-2xl'></FaSistrix>
                        </div>
                        <div className="lg:mx-3 md:mx-1 md:my-0">
                            <FaRegCircleUser className='text-4xl'></FaRegCircleUser>
                        </div>
                </div>
            </div>
         
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
