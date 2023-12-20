import logo from "../../../../src/assets/logo.png"
const Footer = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 pt-28 bg-[#212121]">
            <div className=" text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div>
                <img src={logo} alt="" />
                <p className="mx-14">ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </div> 
            <div>
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
    );
};

export default Footer;