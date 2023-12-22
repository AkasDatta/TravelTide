import { FaPhone, FaRegUser } from "react-icons/fa";
import logo from "../../../../src/assets/logo-footer.png"
import { GoMail } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import img1 from "../../../../src/assets/img1-bali.avif";
import img2 from "../../../../src/assets/img2-barca.avif";
import img3 from "../../../../src/assets/img3-sundarban.avif";
import FooterDown from "./FooterDown";
const Footer = () => {
    return (
        <div className="bg-[#212121]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 pt-24 pb-20">
                <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <img className="w-60 mt-3" src={logo} alt="" />
                        <p className="mr-2 text-gray-300 text-lg"><span className="text-white hover:text-teal-400 cursor-pointer">TravelTide</span>: Effortless bookings for hotels, buses, cars, and curated shopping. Elevate your travel experience with us.</p>
                        <div className="flex-none text-white hover:text-teal-400 cursor-pointer mt-4">
                            <div className="mr-3 flex">
                                <GoMail className="mr-2 mt-1.5 text-xl"></GoMail>
                                <div>
                                    <h2 className="xl:text-lg lg:text-md">akasdatta.me@gmail.com</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none text-white hover:text-teal-400 cursor-pointer my-1">
                            <div className="mr-3 flex">
                                <FaPhone className="mr-2 mt-1.5 text-xl"></FaPhone>
                                <div>
                                    <h2 className="xl:text-lg lg:text-md">+880 1810 318499</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                            <div className="mr-3 flex">
                                <FaLocationDot className="mr-2 mt-1.5 text-xl"></FaLocationDot>
                                <div>
                                    <h2 className="xl:text-lg lg:text-md">Feni, Bangladesh</h2>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div>
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

                            <form action="" className="mb-0 mt-6 space-y-2 mr-8">

                                <div>
                                    <label htmlFor="name" className="sr-only">name</label>

                                    <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Name"
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <FaRegUser></FaRegUser>
                                    </span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">email</label>

                                    <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Email"
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <GoMail></GoMail>
                                    </span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="block w-full bg-teal-400 hover:bg-white hover:text-black px-5 py-5 text-sm duration-300 font-medium text-white"
                                >
                                    SUBSCRIBE
                                </button>
                                </form>
                    </div> 
                    <div>
                    <header className="text-white text-xl my-6 font-bold">Our Instagram</header> 
                        <h2 className="xl:text-lg lg:text-md text-gray-300">Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</h2>
                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 w-42 gap-4 mt-6">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <FooterDown></FooterDown>
            </div>
        </div>

    );
};

export default Footer;