import { FaPhone } from "react-icons/fa";
import logo from "../../../../src/assets/logo.png"
import { GoMail } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-[#212121]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 py-28">
                <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <img className="w-full" src={logo} alt="" />
                        <p className="mx-7 text-xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione ut atque!</p>
                        <div className="flex-none text-white hover:text-teal-400 cursor-pointer mt-4">
                            <div className="mx-3 flex">
                                <GoMail className="xl:mx-4 lg:mx-1 mt-1.5 text-xl"></GoMail>
                                <div>
                                    <h2 className="xl:text-lg lg:text-md">akasdatta.me@gmail.com</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none text-white hover:text-teal-400 cursor-pointer my-1">
                            <div className="mx-3 flex">
                                <FaPhone className="xl:mx-4 lg:mx-1 mt-1.5 text-xl"></FaPhone>
                                <div>
                                    <h2 className="xl:text-lg lg:text-md">+880 1810 318499</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                            <div className="mx-3 flex">
                                <FaLocationDot className="xl:mx-4 lg:mx-1 mt-1.5 text-xl"></FaLocationDot>
                                <div>
                                    <h2 className="xl:text-lg lg:text-md">Masterpara, Feni, Bangladesh</h2>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="">
                        <header className="text-white text-xl my-6 font-bold">Our Recent Posts</header> 
                        <div className="flex-none text-white cursor-pointer">
                                <div>
                                    <h2 className="xl:text-lg lg:text-md  hover:text-teal-400 text-gray-300">New Year, New Resolutions!</h2>
                                    <h2 className="xl:text-lg lg:text-md  hover:text-teal-400 ">November 30, 2023</h2>
                                </div>
                        </div>
                        <div className="flex-none text-white cursor-pointer my-6">
                                <div>
                                    <h2 className="xl:text-lg lg:text-md  hover:text-teal-400 text-gray-300">The Sound Of Our Jungle</h2>
                                    <h2 className="xl:text-lg lg:text-md  hover:text-teal-400 ">January 15, 2024</h2>
                                </div>
                        </div>
                        <div className="flex-none text-white cursor-pointer">
                                <div>
                                    <h2 className="xl:text-lg lg:text-md  hover:text-teal-400 text-gray-300">Visit Thailand, Bali And China</h2>
                                    <h2 className="xl:text-lg lg:text-md  hover:text-teal-400 ">February 7, 2024</h2>
                                </div>
                        </div>
                    </div> 
                    <div>
                    <header className="text-white text-xl my-6 font-bold">Subscribe to our Newsletter</header> 
                        <h2 className="xl:text-lg lg:text-md text-gray-300">Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</h2>
                    </div> 
                    <div>
                    <header className="text-white text-xl my-6 font-bold">Our Instagram</header> 
                        <h2 className="xl:text-lg lg:text-md text-gray-300">Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;