import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterDown = () => {
    return (
        <div className="pb-0 md:pb-2 lg:pb-0 xl:pb-0">
            <div className="py-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
                <div className="text-center sm:flex sm:justify-between sm:text-left">
                    <p className="text-md text-gray-400">© 2023 
                    <a href="/" className="block sm:inline text-gray-400 transition hover:text-white"> Qode Interactive, </a>

                    <span
                        className="text-gray-500"
                    >
                        All rights reserved.
                    </span>

                    <span>&middot;</span>
                    </p>

                    <div className="mt-4 text-md text-gray-400 sm:order-first sm:mt-0 flex gap-2">
                        <h2 className="text-gray-200">Socials</h2>
                        <FaInstagram className="hover:text-white cursor-pointer mt-1"></FaInstagram>
                        <FaTwitter className="hover:text-white cursor-pointer mt-1"></FaTwitter>
                        <FaFacebookF className="hover:text-white cursor-pointer mt-1"></FaFacebookF>
                        <FaYoutube className="hover:text-white cursor-pointer mt-1"></FaYoutube>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterDown;