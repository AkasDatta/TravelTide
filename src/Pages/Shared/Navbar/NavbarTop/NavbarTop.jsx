import { GoMail } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTwitter} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";

const NavbarTop = () => {
    return (
        <div className="hidden lg:flex">
            <div className="navbar bg-black max-h-6 px-0">
                <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                    <div className="mx-3 flex">
                        <GoMail className="mx-4 mt-1.5 text-xl text-teal-400"></GoMail>
                        <div>
                            <h2 className="text-lg">akasdatta.me@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                    <div className="mx-3 flex">
                        <FaPhone className="mx-4 mt-1.5 text-xl text-teal-400"></FaPhone>
                        <div>
                            <h2 className="text-lg">+880 1810 318499</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                    <div className="mx-3 flex">
                        <FaLocationDot className="mx-4 mt-1.5 text-xl text-teal-400"></FaLocationDot>
                        <div>
                            <h2 className="text-lg">Masterpara, Feni, Bangladesh</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-1"></div>

                <div className="flex text-white mx-5">
                    <FaTwitter className="hover:text-teal-400 cursor-pointer"></FaTwitter>
                    <FaFacebookF className="mx-3 hover:text-teal-400 cursor-pointer"></FaFacebookF>
                    <FaLinkedin className="hover:text-teal-400 cursor-pointer"></FaLinkedin>
                    <FaInstagram className="mx-3 hover:text-teal-400 cursor-pointer"></FaInstagram>
                </div>
                <div className="flex-none bg-teal-400">
                    <ul className="menu menu-horizontal px-9 bg-teal-500 py-2.5">
                        <li>
                            <details>
                                <summary className="text-white text-xl">
                                    English
                                </summary>
                                <ul className="bg-teal-400 text-white text-xl">
                                    <li><a>Bangla</a></li>
                                    <li><a>French</a></li>
                                    <li><a>Hindi</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>

                    <h2 className="cursor-pointer"><MdOutlineDarkMode  className="text-white text-3xl mx-5">g</MdOutlineDarkMode></h2>
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;