import { FaPhone } from "react-icons/fa";
import logo from "../../../../src/assets/logo.png"
import { GoMail } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-[#212121]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 pt-28">
                <div className="footer text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div>
                <img className="mx-6" src={logo} alt="" />
                <p className="mx-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione ut atque!</p>
                <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                    <div className="mx-3 flex">
                        <GoMail className="xl:mx-4 lg:mx-1 mt-1.5 text-xl text-teal-400"></GoMail>
                        <div>
                            <h2 className="xl:text-lg lg:text-md">akasdatta.me@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                    <div className="mx-3 flex">
                        <FaPhone className="xl:mx-4 lg:mx-1 mt-1.5 text-xl text-teal-400"></FaPhone>
                        <div>
                            <h2 className="xl:text-lg lg:text-md">+880 1810 318499</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-none text-white hover:text-teal-400 cursor-pointer">
                    <div className="mx-3 flex">
                        <FaLocationDot className="xl:mx-4 lg:mx-1 mt-1.5 text-xl text-teal-400"></FaLocationDot>
                        <div>
                            <h2 className="xl:text-lg lg:text-md">Masterpara, Feni, Bangladesh</h2>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="">
                <header className="footer-title">Services</header> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div> 
            <div>
                <header className="footer-title">Company</header> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div> 
            <div>
                <header className="footer-title">Legal</header> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;