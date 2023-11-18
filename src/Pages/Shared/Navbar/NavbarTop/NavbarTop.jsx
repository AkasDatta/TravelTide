import { GoMail } from "react-icons/go";
import { FaPhone} from "react-icons/fa";
import { FaLocationDot, FaRegCircleUser } from "react-icons/fa6";

const NavbarTop = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-h-12">
                {/* <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
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
                </div> */}
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl  text-teal-400">daisyUI</a>
                </div>
                <div className="flex-none bg-teal-400 py-0.5">
                    <ul className="menu menu-horizontal px-3">
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

                    <h2><FaRegCircleUser className="text-white">g</FaRegCircleUser></h2>
                    {/* <button className="btn btn-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;